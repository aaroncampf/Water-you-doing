from django.urls import path
from .views import UserRegistrationView, UserLoginView, update_water_consumption
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('update_water_consumption/', update_water_consumption, name='update_water_consumption'),
]