import React from "react";

function WeatherDisplay({ weather }) {
  return (
    <div className="main-box">
        <h1>{weather.name}</h1>
        <p>{new Date(weather.dt * 1000).toLocaleDateString()} {new Date(weather.dt * 1000).toLocaleTimeString()}</p>
        <div>
            <h3>{weather.weather[0].description.replace(/\b\w/g, char => char.toUpperCase())}</h3>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Condition Icon" />
        </div>
        <h3>{Math.round(weather.main.temp - 273.15)}°C | ({Math.round(weather.main.feels_like - 273.15)})</h3>
    </div>
  );
}

export default WeatherDisplay;