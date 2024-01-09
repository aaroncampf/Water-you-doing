from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserSettings

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSettings
        fields = ['theme', 'reminder_interval']
