from django.shortcuts import render
from rest_framework import generics
from .models import Task, ContextEntry, Category
from .serializers import TaskSerializer, ContextEntrySerializer, CategorySerializer

'''
Views handle CRUD HTTP requests (get, post, put, delete)
ListCreateAPIView combines get(list) and post(create) logic.
'''

class TaskListCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = CategorySerializer

class ContextEntryListCreate(generics.ListCreateAPIView):
    queryset = ContextEntry.objects.all()
    serializer_class = ContextEntrySerializer