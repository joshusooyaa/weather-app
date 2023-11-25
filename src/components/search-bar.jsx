import { useState, useEffect, useRef } from 'react';

import '../styles/search-bar.css'

import searchButton from '../assets/search-bar/search-icon.png'

export default function SearchBar( { location, setLocation }) {
  const [ input, setInput ] = useState("");
  const [ locations, setLocations ] = useState([]);
  const [ isFocused, setIsFocused ] = useState(false);
  
  const searchRef = useRef(null);
  
  const weatherKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
  const locationKey = import.meta.env.VITE_REACT_APP_LOCATIONIQ_API_KEY;

  const displayAddress = (address) => {
    let primary = address.city || address.town || address.village || address.hamlet || address.name;
    let secondary = address.state || address.region;
    let final = address.postcode || address.country;

    if (final == "United States of America") {
      final = "USA"
    }

    let formatted = [];
    if (primary) formatted.push(primary);
    if (secondary) formatted.push(secondary);
    if (final) formatted.push(final);

    return formatted.join(", ")
  }

  useEffect(() => {
    const apiTimeout = setTimeout(() => {
      if (input != '') {
        fetch(`https://api.locationiq.com/v1/autocomplete?key=${locationKey}&q=${input}&limit=6`, {mode: 'cors'})
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (Array.isArray(data)) {
            const newLocations = data.map((place) => place);
            setLocations(newLocations);
          }
          else {
            setLocations([]);
          }
        })
        .catch((error) => {
          console.error('Not a valid location: ', error)
        })
      }
    }, 500)
    
    return () => clearTimeout(apiTimeout);

  }, [ input ] )

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    // Timeout to allow for checking if the document contains
    // an active element that is a child of the reference
    // Used as a way to allow time for onClick to fire for search-result
    setTimeout(() => {
      if (!searchRef.current.contains(document.activeElement)) {
        setIsFocused(false)
      }
    }, 100)
  };

  const updateLocation = (index) => {
    const lat = locations[index].lat
    const lon = locations[index].lon

    setLocation({lat: lat, long: lon})
  }

  return (
    <div className="header">
      <div className="search-bar-container">
        <button className={`search-button ${isFocused ? 'active' : ''}`} type="submit" onFocus={handleFocus} onBlur={handleBlur}><img src={searchButton} alt="search icon" /></button>
        <div className="search-area" ref={searchRef}>
          <input className={`search-bar ${isFocused ? 'active' : ''}`} onChange={handleInput} value={input} onFocus={handleFocus} onBlur={handleBlur} type="text" placeholder="Search..."/>
          <div className={`search-results ${isFocused ? 'active' : ''}`}>
            {locations.map((place, index) => (
              <p className="search-result" key={index} onClick={() => updateLocation(index)}>{displayAddress(place.address)}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}