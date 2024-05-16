import { getIconUrl } from '../../utils'

export default function WeatherCard({ weather }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-center mb-4">
      <h2 className="text-2xl font-bold">{weather.name}</h2>

      <img
        src={getIconUrl(weather.weather[0].icon)}
        alt={weather.weather[0].description}
        className="mx-auto"
      />

      <p className="text-lg">{weather.weather[0].description}</p>
      <p className="text-4xl font-bold">{weather.main.temp}°C</p>
    </div>
  )
}
