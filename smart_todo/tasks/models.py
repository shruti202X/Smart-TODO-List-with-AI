from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=50)
    frequency = models.IntegerField(default=0)
    def __str__(self):
        return f"{self.name} ({self.frequency})"

class ContextEntry(models.Model):
    CONTEXT_SRC_CHOICES = [
        ('whatsapp', 'whatsapp'),
        ('email', 'email'),
        ('notes', 'notes'),
        ('other', 'other'),
    ]
    content = models.TextField()
    src_type = models.CharField(max_length=20, choices=CONTEXT_SRC_CHOICES)
    timestamp = models.DateTimeField(auto_now_add=True)
    processed_insights = models.JSONField(null=True, blank=True)

class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    priority = models.FloatField(default=0)
    deadline = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=20, default='listed')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)