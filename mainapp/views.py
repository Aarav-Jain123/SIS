from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .weatherPuller import get_weather

# Create your views here.
@api_view(['GET'])
def index(request):
    weather_data = get_weather()
    res = {id: 0, 'weather_data': weather_data}
    response = Response(data=res, status=200)
    response["Access-Control-Allow-Origin"] = "http://localhost:3000" 
    return response