import random
from django.core.mail import send_mail


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
