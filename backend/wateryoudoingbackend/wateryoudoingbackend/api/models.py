from django.db import models
from django.contrib.auth.models import User


class Transaction(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.IntegerField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Transaction {self.id} - User {self.user_id}"

class WaterIntake(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    ounces = models.IntegerField()