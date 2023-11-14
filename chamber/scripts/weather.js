const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector("#current-temp");
const tempDesc = document.querySelector("#temp-desc");
const forecastWeatherE = document.querySelector('#forecast-weather');

const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=24.81&lon=120.97&units=metric&appid=a688831c2a7f3e05d05b5fc3c28b7210";
const forcastWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=24.81&lon=120.97&units=metric&cnt=24&appid=a688831c2a7f3e05d05b5fc3c28b7210";

async function apiFetchCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if(response.ok){
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) { 
        console.log(error);
    }
}
async function apiFetchForecastWeather() {
    try {
        const response = await fetch(forcastWeatherUrl);
        if(response.ok){
            const data = await response.json();
            displayForecastWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) { 
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    let temp = data.main.temp;
    let desc = data.weather[0].description;
    currentTemp.innerHTML = `${temp}&deg;C`;
    tempDesc.innerHTML = `${desc.toUpperCase()}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `weather icon - ${data.weather[0].icon}`);
}

function displayForecastWeather(data) {
    let orgrinList = data.list;
    orgrinList.forEach( (data, index) => {
        if( data.dt_txt.split(" ")[1].split(":")[0] == "09" ){
             // create elements
            let sectionE = document.createElement("section");
            let h4E = document.createElement("h4");
            let imgE = document.createElement("img");
            let p1E = document.createElement("p");

            let date = data.dt_txt.split(" ")[0].substring(5);
            h4E.textContent = date;
            const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            imgE.setAttribute('src', iconsrc);
            imgE.setAttribute('alt', `weather icon - ${data.weather[0].icon}`)
            p1E.innerHTML = `${data.main.temp}&deg;C`;

            sectionE.appendChild(h4E);
            sectionE.appendChild(imgE);
            sectionE.appendChild(p1E);

            forecastWeatherE.appendChild(sectionE);
        }
    });
}

apiFetchCurrentWeather();
apiFetchForecastWeather();