import TempDisplay from './temp-display'
import ForecastDisplay from './forecast-display'

import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import '../styles/display.css'

export default function Display( { location, setLocation }) {
  const [tempF, setTempF] = useState(null)
  
  const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
  
  useEffect(() => {
    const handleSuccess = (position) => {
      setLocation({lat: position.coords.latitude, long: position.coords.longitude})
    }
  
    const handleError = (error) => {
      console.warn(error)
    }
  
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
    else {
      console.log("Geolocation not available")
    }
  }, [])

  useEffect(() => {
    const fetchWeather = (lat, long) => {
      fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat} ${long}&aqi=no`, {mode: 'cors'})
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTempF(data.current.temp_f)
      })
      .catch(error => {
        console.warn(error)
      })
    }

    fetchWeather(location.lat, location.long)
  }, [location.lat, location.long]);

  return (
    <div className="main-display">
      <TempDisplay tempF={tempF}/>
      <ForecastDisplay />
    </div>
  )
}

Display.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number
  }),
  setLocation: PropTypes.func,
}