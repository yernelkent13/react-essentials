import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import useOpenWeatherMap from '../hooks/useOpenWeatherMap'
import WeatherCard from '../components/weatherForecast/WeatherCard'
import ForecastCard from '../components/weatherForecast/ForecastCard'

export default function WeatherForecast() {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [error, setError] = useState('')
  const { fetchWeather, fetchForecast } = useOpenWeatherMap()

  useEffect(() => {
    getCurrentLocation()
  }, [])

  /**
   * Get current location and fetch weather data
   *
   */
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords

      fetchWeather({
        lat: latitude,
        lon: longitude,
      }).then((response) => {
        setLocation(response.data.name)
        setWeather(response.data)

        getForecast(response.data.name)
      })
    })
  }

  /**
   * Fetch weather data
   *
   */
  const getWeather = () =>
    fetchWeather({
      q: location,
    })
      .then((response) => {
        setError('')
        setWeather(response.data)

        getForecast(location)
      })
      .catch(() => {
        setError('Location not found')
        setWeather(null)
        setForecast(null)
      })

  /**
   * Fetch forecast data
   *
   * @param {*} location
   */
  const getForecast = async (location) =>
    fetchForecast({
      q: location,
    })
      .then((response) => {
        setError('')
        setForecast(groupForecastByDate(response.data.list))
      })
      .catch(() => {
        setError('Location not found')
        setWeather(null)
        setForecast(null)
      })

  /**
   * Group forecast data by date
   *
   * @param {*} forecastList
   * @return {*}
   */
  const groupForecastByDate = (forecastList) => {
    return forecastList.reduce((acc, item) => {
      const date = format(new Date(item.dt * 1000), 'yyyy-MM-dd')

      if (!acc[date]) {
        acc[date] = []
      }

      acc[date].push(item)

      return acc
    }, {})
  }

  /**
   * Handle search form submission
   *
   * @param {*} e
   */
  const handleSearch = (e) => {
    e.preventDefault()

    if (location) {
      getWeather()
    } else {
      getCurrentLocation()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Weather Forecast</h1>
      <form
        onSubmit={handleSearch}
        className="mb-4 w-full max-w-md"
      >
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="px-4 py-2 border rounded-lg w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {weather && <WeatherCard weather={weather} />}

      {forecast && (
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          {Object.keys(forecast).map((date) => (
            <ForecastCard
              key={date}
              date={date}
              forecast={forecast[date]}
            />
          ))}
        </div>
      )}
    </div>
  )
}
