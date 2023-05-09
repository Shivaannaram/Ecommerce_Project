from rest_framework import serializers
from .models import Products,Register
class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields="__all__"

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=Register
        fields="__all__"