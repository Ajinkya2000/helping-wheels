from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .utils import create_otp, send_otp, get_pusher_token
from .models import User
from math import sin, cos, sqrt, atan2, radians

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
        # if otp != OTP:
        #     return Response({'error': 'Enter correct OTP',}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(data={**request.data, "is_verified": True})

        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = str(RefreshToken.for_user(user).access_token)
            pusher_token = get_pusher_token(user_id=str(user.id))

            return Response({'user': serializer.data, 'token': token, 'pusher_token': pusher_token}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Locator(APIView):

    def get(self, request):
        queryset = User.objects.all()
        userList = []
        R = 6373.0
        # approximate radius of earth in km

        lat1 = radians(request.data.pop('patient_latitude'))
        lon1 = radians(request.data.pop('patient_longitude'))

        for user in queryset:

            lat2 = radians(user.latitude)
            lon2 = radians(user.longitude)

            dlon = lon2 - lon1
            dlat = lat2 - lat1

            a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
            c = 2 * atan2(sqrt(a), sqrt(1 - a))
            distance = R * c

            if distance <= 10 and user.is_available:
                userList.append(user)
        serializer = UserSerializer(userList, many=True)
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)



# class EmergencyView(APIView):
#     def get(self, request):
#         """
#         1. Phone Number, Latitude and Longitude will be provided from client
#         2. List of all voulenteers nearby will be provided as well
#         """