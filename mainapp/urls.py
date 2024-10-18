from django.urls import path
from .views import *

urlpatterns = [
    path('api/weather/', weather_, name='Weather'),
    path('', index, name='Index'),
    path('api/timer/', set_timer, name='Timer'),
    path('api/irr/', irr, name='Irrigate btn'),
    path('api/farmcareAI/', farm_care_ai, name='AI'),
]
