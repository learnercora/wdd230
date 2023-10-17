const temperatureElement = document.getElementById("temperature");
const windspeedElement = document.getElementById("windspeed");
const windchillElement = document.getElementById("windchill");
//console.log(temperatureElement, windspeedElement, windchillElement)

//specification limits
const temperatureLimitF = 50;
const windSpeedLimitMph = 3.0;


const temperature = parseFloat(temperatureElement.textContent);
const windspeed = parseFloat(windspeedElement.textContent);
//console.log("value", temperature, windspeed)

if (temperature <= temperatureLimitF && windspeed > windSpeedLimitMph) {
    // Calculate the wind chill factor using the formula
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
    
    // Update the "windchill" span element with the calculated value
    windchillElement.textContent = `${windChill.toFixed(2)} °F`;
} else {
    windchillElement.textContent = "N/A";
}