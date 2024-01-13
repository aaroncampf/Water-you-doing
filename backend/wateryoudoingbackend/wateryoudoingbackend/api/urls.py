from django.urls import path
from .views import UserRegistrationView, UserLoginView, UpdateWaterConsumption

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('water/', UpdateWaterConsumption, name='update-water-consumption'),
]