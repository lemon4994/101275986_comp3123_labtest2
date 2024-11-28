import React from "react";

function WeatherDisplay({ weather }) {
  return (
    <div>
      <h1>{weather.name}</h1>
      <div>
        <h2>Weather Conditions: {weather.weather[0].description.replace(/\b\w/g, char => char.toUpperCase())}</h2>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Condition Icon" />
    </div>
      <h3>Temperature: {Math.round(weather.main.temp - 273.15)} C</h3>
    </div>
  );
}

export default WeatherDisplay;