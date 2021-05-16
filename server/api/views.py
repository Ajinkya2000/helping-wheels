from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .utils import create_otp, send_otp, filter_volunteer_by_location
from .models import User
from math import radians
from .utils import get_user_from_token, mail_volunteer
from django.contrib.auth import authenticate

OTP = None


class GetOTP(APIView):
    @staticmethod
    def get(request, email):
        global OTP
        OTP = create_otp()
        send_otp(OTP, email)
        return Response({'otp': OTP}, status=status.HTTP_200_OK)


class Mail_Volunteer(APIView):
    @staticmethod
    def post(request):
        volunteer_list = []
        for user in request.data['volunteer_list']:
            volunteer_list.append(user['email'])
        if volunteer_list:
            mail_volunteer(volunteer_list, request.data['patient_data'])
            return Response({"data": "success"}, status=status.HTTP_200_OK)
        return Response({"error": "No volunteer available right now!"}, status=status.HTTP_200_OK)


class RegisterUserView(APIView):
    @staticmethod
    def post(request):
        global OTP
        otp = request.data.pop('otp')
        if int(otp) != OTP:
            return Response({'error': 'Enter correct OTP', }, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(data={**request.data, "is_verified": True})

        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = str(RefreshToken.for_user(user).access_token)
            return Response({'user': serializer.data, 'token': token}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginUserView(APIView):
    @staticmethod
    def post(request):
        email = request.data['email']
        password = request.data['password']
        user = authenticate(username=email, password=password)

        if user is None:
            return Response({'error': 'A user with this email and password was not found.'}, status=status.HTTP_400_BAD_REQUEST)
        serializer = UserSerializer(user)
        token = str(RefreshToken.for_user(user).access_token)
        return Response({'user': serializer.data, 'token': token}, status=status.HTTP_200_OK)


class UpdateUser(APIView):
    @staticmethod
    def patch(request):
        user = get_user_from_token(request)
        serializer = UserSerializer(instance=user, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Locator(APIView):
    @staticmethod
    def post(request):
        queryset = User.objects.all()
        lat1 = radians(request.data['patient_latitude'])
        lon1 = radians(request.data['patient_longitude'])
        userList = filter_volunteer_by_location(queryset, lat1, lon1)
        serializer = UserSerializer(userList, many=True)
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)
