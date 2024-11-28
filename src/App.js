import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import WeatherDisplay from './Weather'
import { getWeatherData } from './api'
import ExtraStats from './ExtraStats'
import FutureStats from './FutureStats';

function App() {
  const [city, setCity] = useState("Toronto")  
  const [weather, setWeather] = useState(null)
  const getWeather = async (city) => {
    try {
      const data = await getWeatherData(city);
      setWeather(data);
    } catch (error) {
      console.error(error)
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City name"/>
        <button onClick={() => getWeather(city)}>Get Weather</button>
        <div className="weather-container">
          {weather && <WeatherDisplay weather={weather} />}
          <div className="sub-box">
          {weather && <ExtraStats weather={weather} />}
          {weather && <FutureStats weather={weather} />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;