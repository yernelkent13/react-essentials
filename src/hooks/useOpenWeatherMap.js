import axios from 'axios'

/**
 * Hook to fetch weather data from OpenWeatherMap API
 *
 * @return {*}
 */
export default function useOpenWeatherMap() {
  const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY

  const http = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
  })

  /**
   * Fetch weather data from OpenWeatherMap API
   *
   * @param {*} payload
   * @return {*}
   */
  const fetchWeather = async (payload) => {
    return http.get('weather', {
      params: {
        appid: apiKey,
        units: 'metric',
        ...payload,
      },
    })
  }

  /**
   * Fetch forecast data from OpenWeatherMap API
   *
   * @param {*} payload
   * @return {*}
   */
  const fetchForecast = async (payload) => {
    return http.get('forecast', {
      params: {
        appid: apiKey,
        units: 'metric',
        ...payload,
      },
    })
  }

  return { fetchWeather, fetchForecast }
}
