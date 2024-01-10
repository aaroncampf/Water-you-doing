from datetime import date
from rest_framework import generics, permissions
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
import json
from .models import WaterConsumption


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

@require_POST
@login_required
def update_water_consumption(request):
    data = json.loads(request.body)
    amount = data.get('amount')
    user = request.user
    today = date.today()
    
    water_consumption, created = WaterConsumption.objects.get_or_create(
        user=user,
        date=today,
        defaults={'amount': amount}
    )

    if not created:
        water_consumption.amount = amount
        water_consumption.save()

    return JsonResponse({'message': 'Water consumption updated successfully'})
