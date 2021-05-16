from django.urls import path
<<<<<<< HEAD
from .views import GetOTP, RegisterUserView, Locator, UpdateUser, LoginUserView, Mail_Volunteer
=======
from .views import GetOTP, RegisterUserView, Locator, UpdateUser, LoginUserView, PatientView
>>>>>>> 404fd7b40abe598b3c80fd20295237d6d4bd0d7a

urlpatterns = [
    path('send-otp/<str:email>/', GetOTP.as_view(), name="send-otp"),
    path('register/', RegisterUserView.as_view(), name="register"),
    path('login/', LoginUserView.as_view(), name="login"),
    path('get-volunteer/', Locator.as_view(), name="get-volunteer"),
    path('update-user/', UpdateUser.as_view(), name="update-user"),
<<<<<<< HEAD
    path('mail-volunteer/', Mail_Volunteer.as_view(), name="mail-volunteer")
=======
    path('add-volunteer/', PatientView.as_view(), name="add-volunteer"),
>>>>>>> 404fd7b40abe598b3c80fd20295237d6d4bd0d7a
]