import '../styles/search-bar.css'

import searchButton from '../assets/search-bar/search-icon.png'

export default function SearchBar() {
  return (
    <div className="header">
      <div className="search-bar-container">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit"><img src={searchButton} alt="search icon" /></button>
      </div>
    </div>
  )
}