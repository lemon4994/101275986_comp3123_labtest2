import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const apiKey = "c974fe5fab15ac4e2e8e6c3f26db2296"

function App() {
  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}`)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getWeather}>Get Weather</button>
      </header>
    </div>
  );
}

export default App;
