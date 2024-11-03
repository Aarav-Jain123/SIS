import requests
from dotenv import load_dotenv
import os

def get_weather():
    load_dotenv()
    API_KEY = os.getenv('OPEN_WEATHER_MAP_API_KEY')
    BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

    city = f'Faridabad, Haryana'
    request_url = f'{BASE_URL}?appid={API_KEY}&q={city}'
    response = requests.get(request_url)

    if response.status_code == 200:
        json_result = response.json()
        
        weather = json_result['weather'][0]
        
        weather_main = weather['main']
        weather_desc = weather['description']
        
        main = json_result['main']
        
        temp_c = round(main['temp'] - 273.15)
        temp_f = temp_c * 9/5 + 32
        
        # pressure_pas = main['pressure']
        
        humdity = main['humidity']
        
        visibility = json_result['visibility'] / 1000
        
        wind = json_result['wind']
        
        wind_speed = wind['speed']
        
        sys = json_result['sys']
        
        country = sys['country']
        
        city = json_result['name']
        

    return [weather_main, weather_desc, temp_c, temp_f, humdity, visibility, wind_speed, country, city]
