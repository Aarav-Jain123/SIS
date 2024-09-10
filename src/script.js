const url = 'http://127.0.0.1:8000';

export async function getWeatherData(){
    const res = await fetch(url);
    const data = await res.json()
    console.log(data);
};
