from django.db import models
from django.contrib.auth.models import User

class WaterConsumption(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.IntegerField()
    date = models.DateField()
