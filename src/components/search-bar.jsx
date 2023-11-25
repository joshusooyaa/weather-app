import { useState, useEffect } from 'react';

import '../styles/search-bar.css'

import searchButton from '../assets/search-bar/search-icon.png'

export default function SearchBar() {
  const [ input, setInput ] = useState("")
  const [ locations, setLocations ] = useState([])
  
  const weatherKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
  const locationKey = import.meta.env.VITE_REACT_APP_LOCATIONIQ_API_KEY;

  const displayAddress = (address) => {
    let primary = address.city || address.town || address.village || address.hamlet;
    let secondary = address.state || address.region;
    let final = address.postcode || address.country;

    let formatted = [];
    if (primary) formatted.push(primary);
    if (secondary) formatted.push(secondary);
    if (final) formatted.push(final);

    return formatted.join(", ")
  }

  useEffect(() => {
    const apiTimeout = setTimeout(() => {
      fetch(`https://api.locationiq.com/v1/autocomplete?key=${locationKey}&q=${input}&limit=6`, {mode: 'cors'})
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (Array.isArray(data)) {
            const newLocations = data.map((place) => displayAddress(place.address));
            setLocations(newLocations);
          }
          else {
            setLocations([]);
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }, 500)
    
    return () => clearTimeout(apiTimeout);

  }, [ input ] )

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  

  return (
    <div className="header">
      <div className="search-bar-container">
        <div className="search-area">
          <input className="search-bar" onChange={handleInput} value={input} type="text" />
          <div className="search-results">
            {locations.map((location, index) => (
              <p key={index}>{location}</p>
            ))}
          </div>
        </div>
        <button className="search-button" type="submit"><img src={searchButton} alt="search icon" /></button>
      </div>
    </div>
  )
}