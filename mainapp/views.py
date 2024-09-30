from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .weatherPuller import get_weather

# Create your views here.
@api_view(['GET'])
def index(request):
    weather_data = get_weather()
    res = [{'key': 0, 'weather_data': weather_data}]
    return Response(data=res)