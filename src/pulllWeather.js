const url = 'http://127.0.0.1:8000';

async function getWeatherData(){
    const res = await fetch(url);
    const data = await res.json();
    let weatherData = data.weather_data
    let mainDict = weatherData.main;
    let tempC = mainDict.temp - 273.15;
    let tempF = tempC * 9/5 + 32;
    let feelsLikeC = mainDict.feels_like - 273.15;
    let feelsLikeF = feelsLikeC * 9/5 + 32;
    let tempMinC = mainDict.temp_min - 273.15;
    let tempMinF = tempMinC * 9/5 + 32;
    let tempMaxC = mainDict.temp_max - 273.15;
    let tempMaxF = tempMaxC * 9/5 + 32;
    let pressurePascal = mainDict.pressure;
    let humidity = mainDict.humidity
    let visibillty = data.visibility / 1000;
    let weatherDict = weatherData.weather;
    let weatherTitle = weatherDict.weather;
    let weatherDesc = weatherDict.description;
    let windDict = weatherData.wind;
    let windSpeed = windDict.speed;
    let sysDict = weatherData.sys;
    let country = sysDict.country;
    let city = weatherData.city;
    let dataArr = [tempC, tempF, tempMinC, tempMinF, tempMaxC, tempMaxF, feelsLikeC, feelsLikeF, pressurePascal, humidity, visibillty, weatherTitle, weatherDesc, windSpeed, country, city];
    return tempC;
};

console.log(getWeatherData());