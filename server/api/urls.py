from django.urls import path
from .views import GetOTP, RegisterUserView, Locator, GetPusherToken, getNotification

urlpatterns = [
    path('send-otp/<str:email>/', GetOTP.as_view(), name="send-otp"),
    path('register/', RegisterUserView.as_view(), name="register"),
    path('locator/', Locator.as_view(), name="locator"),
    path('pusher/', GetPusherToken.as_view(), name="pusher"),
    path('notif/', getNotification.as_view(), name="notif")
]

