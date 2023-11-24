import Background from './components/background'
import SearchBar from './components/search-bar'
import Display from './components/display'
import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [location, setLocation] = useState({lat: 51.5072, long: 0.1276});

  const [tempF, setTempF] = useState(null)
  
  const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
  
  // Gather geolocation on load, then set location based on that
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
    <>
      <Background />
      <SearchBar location={location}/>
      <Display tempF={tempF}/>
    </>
  )
}

export default App
