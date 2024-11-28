import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const apiKey = "c974fe5fab15ac4e2e8e6c3f26db2296"

function App() {
  const [city, setCity] = useState("Toronto")  
  const [weather, setWeather] = useState(null)
  const getWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      setWeather(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City name"/>
        <button onClick={() => getWeather(city)}>Get Weather</button>
        {weather && (
          <div>
            <h1>{weather.name}</h1>
            <h2>Weather Conditions: {weather.weather[0].description}</h2>
            <h3>Temperature: {Math.round(weather.main.temp - 273.15)} C</h3>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
