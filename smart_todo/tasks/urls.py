from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.TaskListCreate.as_view()),
    path('categories/', views.CategoryListCreate.as_view()),
    path('contexts/', views.ContextEntryListCreate.as_view()),
]