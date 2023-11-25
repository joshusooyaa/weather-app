import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

import '../styles/search-bar.css'

import searchButton from '../assets/search-bar/search-icon.png'

export default function SearchBar( { setLocation }) {
  const [ input, setInput ] = useState("");
  const [ locations, setLocations ] = useState([]);
  const [ isFocused, setIsFocused ] = useState(false);
  
  const searchRef = useRef(null);
  const buttonRef = useRef(null);
  
  const weatherKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

  // locationIQ api used due to weatherAPI search/autocomplete not working
  // for some reason weatherAPI started working, but I've decided to keep using locationIQ
  const locationKey = import.meta.env.VITE_REACT_APP_LOCATIONIQ_API_KEY;

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
  };

  const enterInput = () => {
    if (isValidInput) {
      console.log('here')
    }
  }

  const isValidInput = () => {
    // If the response json returns an empty response from the search
    // it's an invalid input and will not update location
    fetch(`http://api.weatherapi.com/v1/search.json?key=${weatherKey}&q=${input}&aqi=no`, {mode: 'cors'})
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.warn(error)
      })
  }

  const isButtonActive = () => {
    if (buttonRef.current.classList.contains('active')) {
      console.log("yes it is active")
      enterInput;
    }
  }

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

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      enterInput
    }
  }

  const updateLocation = (index) => {
    const lat = locations[index].lat
    const lon = locations[index].lon

    console.log(`Now displaying weather for ${locations[index].address.name}`)
    setLocation({lat: lat, long: lon})

    // As a result, reset input and autofill locations
    setInput('')
    setLocations([])
  }

  return (
    <div className="header">
      <div className="search-bar-container">
        <button ref={buttonRef} className={`search-button ${isFocused ? 'active' : ''}`} onClick={isButtonActive} 
          onFocus={() => {
            setTimeout(() => {
              handleFocus();
            }, 100);
            }}
          onBlur={handleBlur}
        >
          <img src={searchButton} alt="search icon" />
        </button>
        <div className="search-area" ref={searchRef}>
          <input className={`search-bar ${isFocused ? 'active' : ''}`} onChange={handleInput} value={input} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeyPress} type="text" placeholder="Search..."/>
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

SearchBar.propTypes = {
  setLocation: PropTypes.func,
}

