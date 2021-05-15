from django.urls import path
from .views import GetOTP, RegisterUserView, Locator

urlpatterns = [
    path('send-otp/<str:email>/', GetOTP.as_view(), name="send-otp"),
    path('register/', RegisterUserView.as_view(), name="register"),
    path('locator/', Locator.as_view(), name="locator")
]

