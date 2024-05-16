import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Resume from './pages/Resume'
import WeatherForecast from './pages/WeatherForecast'
import NoPage from './pages/NoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="Resume"
            element={<Resume />}
          />
          <Route
            path="weather-forecast"
            element={<WeatherForecast />}
          />
          <Route
            path="*"
            element={<NoPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
