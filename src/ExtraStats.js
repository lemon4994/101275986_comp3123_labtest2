import React from "react";

function ExtraStats({ weather }) {
  return (
    <div className="extra-weather">
        <div style={{ backgroundColor: 'black', borderRadius: "10px" }}>
            <h3>Max Temp</h3>
            <p>{Math.round(weather.main.temp_max - 273.15)}°C</p>
        </div>
        <div style={{ backgroundColor: 'black', borderRadius: "10px" }}>
            <h3>Min Temp</h3>
            <p>{Math.round(weather.main.temp_min - 273.15)}°C</p>
        </div>
        <div style={{ backgroundColor: 'black', borderRadius: "10px" }}>
            <h3>Humidity</h3>
            <p>{weather.main.humidity}%</p>
        </div>
        <div style={{ backgroundColor: 'black', borderRadius: "10px" }}>
            <h3>Wind Speed</h3>
            <p>{weather.wind.speed} m/s</p>
        </div>
        <div style={{ backgroundColor: 'black', borderRadius: "10px" }}>
            <h3>Pressure</h3>
            <p>{weather.main.pressure} hPa</p>
        </div>
    </div>
  );
}

export default ExtraStats;