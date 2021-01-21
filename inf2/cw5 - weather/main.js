const apiKey = '356635ab06631032b18b8c7c5deaf93b';
let cityName = document.querySelector("#text");
let button = document.querySelector("#btn").addEventListener('click', createWeatherBox);

function createWeatherBox(){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`;
    fetch(apiUrl)
    .then(res => res.json())
    .then((json)=>{ 
        console.log(json);
        const divWeather = document.createElement('div');
        divWeather.className = "mainDiv";
        document.body.appendChild(divWeather);

        const cityName = document.createElement('h1');
        cityName.className = "cityName";
        cityName.innerHTML = json.name;
        divWeather.appendChild(cityName);

        const temperature = document.createElement('h3');
        temperature.className = "temperature";
        temperature.innerHTML = `${Math.round(json.main.temp-273.15)} \u2103`;
        divWeather.appendChild(temperature);

        const humidity = document.createElement('h3');
        humidity.className = "humidity";
        humidity.innerHTML = `${json.main.humidity} %`;
        divWeather.appendChild(humidity);

        const pressure = document.createElement('h3');
        pressure.className = "pressure";
        pressure.innerHTML = `${json.main.pressure} hPa`;
        divWeather.appendChild(pressure);

        const weatherIcon = document.createElement('img');
        weatherIcon.className = "weatherIcon";
        weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
        divWeather.appendChild(weatherIcon);
    })
    .catch(err => {throw err});   
}