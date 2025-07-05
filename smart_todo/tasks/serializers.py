from rest_framework import serializers
from .models import task, ContextEntry, Category

"""
Brief:
Serializers convert model instances to JSON (and vice versa).
They are like forms but for APIs.
ModelSerializer autogenerate fields based on the model.
It also validates data sent by API.
"""

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ContextEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContextEntry
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'