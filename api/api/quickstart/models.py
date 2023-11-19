from django.db import models

# Create your models here.
class Todo(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='title')
    description = models.CharField(max_length=100, blank=True, default='desc')

    class Meta:
        ordering = ['created']