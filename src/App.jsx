import Background from './components/background'
import SearchBar from './components/search-bar'
import Display from './components/display'
import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [location, setLocation] = useState({lat: 51.5072, long: 0.1276});
  const [currentData, setCurrentData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  
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
      const weatherURL = 'https://corsproxy.io/?' + encodeURIComponent(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat} ${long}&aqi=no`)
      fetch(weatherURL, {mode: 'cors'})
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (validResponse(data)) {
          setCurrentData(data)
        }
        else {
          window.alert("Oops! This location does not have weather information.")
        }
      })
      .catch(error => {
        console.warn(error)
      })
    }

    const fetchHourly = (lat, long) => {
      const hourlyURL = 'https://corsproxy.io/?' + encodeURIComponent(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat} ${long}&days=2&aqi=no&alerts=no`);
      fetch(hourlyURL, {mode: 'cors'})
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (validResponse(data)) {
          setHourlyData(data)
        }
        else {
          window.alert("Oops! This location does not have weather information.")
        }
      })
      .catch(error => {
        console.warn(error)
      });
    }

    fetchWeather(location.lat, location.long);
    fetchHourly(location.lat, location.long);

  }, [location.lat, location.long]);

  const validResponse = (data) => {
    if (data.error) {
      return false;
    }

    return true;
  }

  return (
    <>
      {/* Wait for fetch before displaying */}
      {currentData && location && hourlyData && (
        <>
          <Background code={currentData.current.condition.code} isDay={currentData.current.is_day}/>
          <SearchBar location={location} setLocation={setLocation}/>
          <Display currentData={currentData} hourlyData={hourlyData}/>
        </>
      )}
    </>
  )
}

export default App
