from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('email', 'password', 'phone', 'name', 'address', 'vehicle', 'vehicle_number', 'longitude', 'latitude', 'is_verified', 'is_available')
        extra_kwargs = {
            'password': {'write_only': True}
        }
