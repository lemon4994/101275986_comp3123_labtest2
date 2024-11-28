import React from "react";

function WeatherDisplay({ weather }) {
  return (
    <div>
      <h1>{weather.name}</h1>
      <h2>Weather Conditions: {weather.weather[0].description}</h2>
      <h3>Temperature: {Math.round(weather.main.temp - 273.15)} C</h3>
    </div>
  );
}

export default WeatherDisplay;