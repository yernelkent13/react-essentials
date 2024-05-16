import { format } from 'date-fns'
import { getIconUrl } from '../../utils'

export default function ForecastCard({ date, forecast }) {
  return (
    <div
      key={date}
      className="mb-4"
    >
      <h3 className="text-xl font-semibold mb-2">
        {format(new Date(date), 'EEEE, MMMM d')}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {forecast.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 p-2 rounded-lg shadow-md"
          >
            <p>{format(new Date(item.dt * 1000), 'hh:mm a')}</p>

            <img
              src={getIconUrl(item.weather[0].icon)}
              alt={item.weather[0].description}
              className="mx-auto"
            />

            <p>{item.weather[0].description}</p>
            <p className="font-bold">{item.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  )
}
