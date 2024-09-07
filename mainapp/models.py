from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    location_data = models.TextField()
    user_key = models.TextField()
    
    
    def __str__(self):
        return self.user.email
    
class Soil(UserProfile):
    soil_type = models.CharField(max_length=100)
    soil_texture = models.CharField(max_length=100)
    registerd_to = models.CharField(max_length=100)
    