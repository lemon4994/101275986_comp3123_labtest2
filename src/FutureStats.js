import React from "react";  

function FutureStats({ weather }) { 
  return (
    <div className="future-weather">
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
    <div>
        <h3>Tomorrow</h3>
        <p>{weather.weather[0].description.replace(/\b\w/g, char => char.toUpperCase())}</p>
        <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
    </div>
    <div>
        <h3>Day After Tomorrow</h3>
        <p>{weather.weather[0].description.replace(/\b\w/g, char => char.toUpperCase())}</p>
        <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>

    </div>
    </div>
</div>
  );
}   

export default FutureStats;