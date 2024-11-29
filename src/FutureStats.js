import React from "react";  

function FutureStats({ futureWeather }) { 

  return (
    <div className="future-weather">
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div>
                <h3>Tomorrow</h3>
                <img src={`https://openweathermap.org/img/wn/${futureWeather.list[8].weather[0].icon}@2x.png`} alt="Weather Condition Icon" />
                <p>{Math.round(futureWeather.list[8].main.temp - 273.15)}°C</p>
                {/*this is basically a super simplifed version of Weather.js*/}
            </div>
            <div>
                <h3>2 Days</h3>
                <img src={`https://openweathermap.org/img/wn/${futureWeather.list[16].weather[0].icon}@2x.png`} alt="Weather Condition Icon" />
                <p>{Math.round(futureWeather.list[16].main.temp - 273.15)}°C</p>
            </div>
            <div>
                <h3>3 Days</h3>
                <img src={`https://openweathermap.org/img/wn/${futureWeather.list[24].weather[0].icon}@2x.png`} alt="Weather Condition Icon" />
                <p>{Math.round(futureWeather.list[24].main.temp - 273.15)}°C</p>
            </div>
            <div>
                <h3>4 Days</h3>
                <img src={`https://openweathermap.org/img/wn/${futureWeather.list[32].weather[0].icon}@2x.png`} alt="Weather Condition Icon" />
                <p>{Math.round(futureWeather.list[32].main.temp - 273.15)}°C</p>
            </div>
        </div>
    </div>
  );
}   

export default FutureStats;