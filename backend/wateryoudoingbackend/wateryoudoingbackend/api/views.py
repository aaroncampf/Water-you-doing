import json
from tokenize import Token
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
from django.contrib.auth import authenticate
from .models import WaterIntake
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework.authtoken.models import Token



class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        # Hash the password before saving
        password = make_password(self.request.data.get('password'))
        serializer.save(password=password)

        user = serializer.instance

        # Create a token for the user
        Token.objects.get_or_create(user=user)

        response_data = serializer.data
        response_data['user_id'] = user.id

        return Response(response_data)

class UserLoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)

        # Retrieve user w/ authenticate method
        user = authenticate(request=request, **serializer.validated_data)

        if user is not None:
            # User is authenticated, proceed with token creation
            token, created = Token.objects.get_or_create(user=user)
            return Response({'user_id': user.id, 'token': token.key, 'success': True})
        else:
            # Invalid login credentials!!!
            return Response({'error': 'Invalid login credentials'}, status=401)
        
# If login is now creating tokens for users, water intake may work now? I'm scared to look.

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