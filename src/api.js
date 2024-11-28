import axios from 'axios';

const apiKey = "c974fe5fab15ac4e2e8e6c3f26db2296"

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}