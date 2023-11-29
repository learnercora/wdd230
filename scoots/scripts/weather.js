const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector("#current-temp");
const currDesc = document.querySelector("#curr-desc");
const currHumi = document.querySelector("#curr-humidity");
const forecastWeatherE = document.querySelector('#forecast-weather');

const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.96&units=metric&appid=a688831c2a7f3e05d05b5fc3c28b7210";
const forcastWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.96&units=metric&cnt=15&appid=a688831c2a7f3e05d05b5fc3c28b7210";

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
            const today = new Date().getDate();
            const filteredList = data.list.filter((data)=>{
                return !data.dt_txt.includes(today.toString())
            })
            // console.log("filteredList",filteredList);
            displayForecastWeather(filteredList);
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
    // console.log(data)
    currentTemp.innerHTML = `${temp}&deg;C`;
    currDesc.innerHTML = `${desc.toUpperCase()}`;
    currHumi.innerHTML = `Humidity: ${data.main.humidity}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `weather icon - ${data.weather[0].icon}`);
}

function displayForecastWeather(data) {
    data.forEach( (data, index) => {
        if( data.dt_txt.split(" ")[1].split(":")[0] === "09" ) {
            // console.log(data)
            // create elements
            let imgE = document.createElement("img");
            let spanE = document.createElement("span");
            let p1E = document.createElement("p");
            let p2E = document.createElement("p");

            const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            imgE.setAttribute('src', iconsrc);
            imgE.setAttribute('alt', `weather icon - ${data.weather[0].icon}`)
            spanE.innerHTML = `&nbsp${data.main.temp}&deg;C`;
            p1E.innerHTML = `${data.weather[0].description.toUpperCase()}`;
            p2E.innerHTML = `Humidity: ${data.main.humidity}`;

            forecastWeatherE.appendChild(imgE);
            forecastWeatherE.appendChild(spanE);
            forecastWeatherE.appendChild(p1E);
            forecastWeatherE.appendChild(p2E);
        }
    });
}

apiFetchCurrentWeather();
apiFetchForecastWeather();