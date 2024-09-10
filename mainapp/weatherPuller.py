import requests
from dotenv import load_dotenv
import datetime
import os
# from .views import state, pin_code, city

def get_weather():
    load_dotenv()
    API_KEY = os.getenv('OPEN_WEATHER_MAP_API_KEY')
    BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

    city = f'Faridabad, Haryana'
    request_url = f'{BASE_URL}?appid={API_KEY}&q={city}'
    response = requests.get(request_url)

    if response.status_code == 200:
        json_result = response.json()

    return json_result