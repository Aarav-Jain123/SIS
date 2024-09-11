const url = 'http://127.0.0.1:8000';

async function getWeatherData(){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    let mainDict = data.weather_data.main;
    let tempKelvin = mainDict.temp;
    let feelsLikeKelvin = mainDict.feels_like;
    let tempMinKelvin = mainDict.temp_min;
    let tempMaxKelvin = mainDict.temp_max;
    let pressurePascal = mainDict.pressure;
    let humidityAir = mainDict.humidity
    let visibilltyMetre = data.visibility
    
};

getWeatherData()