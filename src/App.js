import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import WeatherDisplay from './Weather'
import { getWeatherData } from './api'
import { getWeatherFuture } from './api'  
import ExtraStats from './ExtraStats'
import FutureStats from './FutureStats';

function App() {
  const [city, setCity] = useState("Toronto")  //setup default states
  const [weather, setWeather] = useState(null)
  const [futureWeather, setFutureWeather] = useState(null)
  const getWeather = async (city) => { //this gets the weather data from the api.js for both today and the future
    try {
      const data = await getWeatherData(city);
      setWeather(data);
      const futureData = await getWeatherFuture(city);
      setFutureWeather(futureData);
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    getWeather(city);
  }, [city]); //this lets me load Toronto by default instead of displaying nothing

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City name"/>
        <button onClick={() => getWeather(city)}>Get Weather</button> {/*button that gets data*/}
        <div className="weather-container">
          {weather && <WeatherDisplay weather={weather} />} {/*this displays the current weather*/}
          <div className="sub-box">
          {weather && <ExtraStats weather={weather} />} {/*this displays the humidity etc.*/}
          {futureWeather && <FutureStats futureWeather={futureWeather} />} {/*this displays the next 4 days*/}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;