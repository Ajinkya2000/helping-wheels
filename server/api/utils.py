import random
from django.core.mail import send_mail
from math import sin, cos, sqrt, atan2, radians
from rest_framework_simplejwt.authentication import JWTAuthentication


def create_otp():
    otp = random.randint(1000, 9999)
    return otp


def send_otp(otp, email):
    send_mail(
        subject='OTP for HelpingWheels',
        message=f'Your OTP for HelpingWheels is {otp}.',
        from_email='agrawal.kashish1907@gmail.com',
        recipient_list=[email, ],
        # recipient_list=['email'],
        fail_silently=False,
    )


def get_user_from_token(request):
    jwt = JWTAuthentication()
    header = jwt.get_header(request)
    raw_token = jwt.get_raw_token(header)
    validated_token = jwt.get_validated_token(raw_token)
    user = jwt.get_user(validated_token)
    return user


def filter_volunteer_by_location(queryset, lat1, lon1):
    userList = []
    R = 6373.0
    count = 0
    # approximate radius of earth in km
    for user in queryset:
        lat2 = radians(user.latitude)
        lon2 = radians(user.longitude)

        dlon = lon2 - lon1
        dlat = lat2 - lat1

        a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
        c = 2 * atan2(sqrt(a), sqrt(1 - a))
        distance = R * c

        if distance <= 10 and user.is_available and count <= 10:
            count += 1
            userList.append(user)

    return userList
