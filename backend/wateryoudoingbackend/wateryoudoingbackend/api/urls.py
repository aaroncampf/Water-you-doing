from django.urls import path
from .views import UserRegistrationView, UserLoginView, SaveWaterIntake

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('water/', SaveWaterIntake.as_view(), name='save_water_intake'),
    
]