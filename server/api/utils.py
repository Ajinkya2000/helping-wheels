import random
from django.core.mail import send_mail
from pusher_push_notifications import PushNotifications


def create_otp():
    otp = random.randint(1000, 9999)
    return otp


def send_otp(otp, email):
    send_mail(
        subject='OTP for HelpingWheels',
        message=f'Your OTP for HelpingWheels is {otp}.',
        from_email='agrawal.kashish1907@gmail.com',
        recipient_list=[email,],
        # recipient_list=['email'],
        fail_silently=False,
    )

def get_pusher_token(user_id):
    beams_client = PushNotifications(
        instance_id='8d0baa0c-08b4-43ce-9134-e9fe4b14ec6a',
        secret_key='6EC51704541E3F5D0BD2D6C3C0A40DF677AB58EA12B28B701A935DC98DCFEFB3',
    )

    beams_token = beams_client.generate_token(user_id=user_id)
    return beams_token