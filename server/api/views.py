from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .utils import create_otp, send_otp
OTP = None


class GetOTP(APIView):
    @staticmethod
    def get(request, email):
        global OTP
        OTP = create_otp()
        send_otp(OTP, email)
        return Response(OTP, status=status.HTTP_200_OK)


class RegisterUserView(APIView):
    @staticmethod
    def post(request):
        global OTP
        otp = request.data.pop('otp')
        if otp != OTP:
            return Response({'error': 'Enter correct OTP',}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(data={**request.data, "is_verified": True})

        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = str(RefreshToken.for_user(user).access_token)
            return Response({**serializer.data, 'token': token}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)