from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'phone', 'name', 'address', 'vehicle_name', 'vehicle_number', 'longitude', 'latitude', 'is_verified', 'is_available')
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        instance.address = validated_data.get('address', instance.address)
        instance.name = validated_data.get('name', instance.name)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.vehicle_name = validated_data.get('vehicle_name', instance.vehicle_name)
        instance.vehicle_number = validated_data.get('vehicle_number', instance.vehicle_number)
        instance.is_available = validated_data.get('is_available', instance.is_available)
        instance.save()
        return instance
