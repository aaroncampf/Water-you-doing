from django.db import models
from django.contrib.auth.models import User

class UserSettings(models.Model):
    THEME_CHOICES = [
        ('default', 'Default Theme'),
        ('dark', 'Dark Theme'),
        ('light', 'Light Theme'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    theme = models.CharField(max_length=255, choices=THEME_CHOICES, default='default')
    reminder_interval = models.IntegerField(default=1)
