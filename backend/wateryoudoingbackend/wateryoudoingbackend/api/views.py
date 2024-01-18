from django.http import JsonResponse
from django.views.decorators.http import require_POST, require_GET
from rest_framework import generics, permissions
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .serializers import UserSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from datetime import date
from django.shortcuts import render, redirect
from .models import WaterIntake


class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        user = serializer.save()
        response_data = serializer.data
        response_data['user_id'] = user.id
        return Response(response_data)


class UserLoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        return Response({'user_id': user.id})


@login_required
def home(request):
    user = request.user
    today = date.today()
    water_intake, created = WaterIntake.objects.get_or_create(user=user, date=today)

    if request.method == 'POST':
        ounces = int(request.POST.get('ounces', 0))
        water_intake.ounces += ounces
        water_intake.save()

    return render(request, 'home.html', {'water_intake': water_intake})

