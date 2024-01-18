import json
from django.http import JsonResponse
from django.views import View
from rest_framework import generics, permissions
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
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

@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
class SaveWaterIntake(View):
    def post(request):
        response = JsonResponse({'message': 'Water intake saved successfully'})
        response['Access-Control-Allow-Origin'] = 'http://localhost:5173'
        response['Access-Control-Allow-Methods'] = 'POST'
        response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        return response
        
        
        
        
        # if request.method == 'OPTIONS':
        #     return JsonResponse({'message': 'CORS preflight request success'})
        # elif request.method == 'POST':
        #     data = json.loads(request.body)
        #     user = request.user
        #     amount = data.get('ounces', 0)
            
        #     WaterIntake.objects.create(user=user, ounces=amount)
        #     return JsonResponse({'message': 'Water intake saved successfully'})
        # else:
        #     return JsonResponse({'error': 'Invalid request method'})