from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    countries = [('Israel', 'India', 'China', 'Japan', 'South Korea')]
    country = models.CharField(max_length=100, choices=countries)
    states = [('Northern District', "Southern District", "Haryana", "Madhya Pradesh", "Jiangsu", "Henan", "Tokyo", "Osaka", "Gyeonggi", "Chungcheongbuk-do")]
    state = models.CharField(max_length=100, choices=states)