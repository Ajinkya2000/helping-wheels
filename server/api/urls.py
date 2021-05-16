from django.urls import path
from .views import GetOTP, RegisterUserView, Locator, UpdateUser, LoginUserView

urlpatterns = [
    path('send-otp/<str:email>/', GetOTP.as_view(), name="send-otp"),
    path('register/', RegisterUserView.as_view(), name="register"),
    path('login/', LoginUserView.as_view(), name="login"),
    path('get-volunteer/', Locator.as_view(), name="get-volunteer"),
    path('update-user/', UpdateUser.as_view(), name="update-user"),
]