from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .weatherPuller import get_weather
from .promptPuller import pull_answer
import requests


# Create your views here.
def index(request):
    return HttpResponse('Hello World')


@api_view(['GET'])
def weather_(request):
    weather_data = get_weather()
    res = [{'key': 0, 'weather_data': weather_data}]
    return Response(data=res)

@api_view(['POST'])
def set_timer(request):
    return Response()


@api_view(['POST'])
def irr(request):
    return Response()

@api_view(['POST'])
def farm_care_ai(request):
    res = request.data 
    answer = pull_answer(res['up'])
    response = [{'key': 0, 'answer': answer}] 
    return Response(data=response)