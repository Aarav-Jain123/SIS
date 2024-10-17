from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .weatherPuller import get_weather


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
    h = request.POST.get('h')
    print(type(h))
    return HttpResponse('g')
    

# @api_view(['POST'])
# def set_timer(request):
#     h = request.POST.get('h')
#     print(type(h))