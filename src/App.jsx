import Background from './components/background'
import SearchBar from './components/search-bar'
import Display from './components/display'
import { useState } from 'react'

import './App.css'

function App() {
  const [location, setLocation] = useState({lat: 51.5072, long: 0.1276});

  return (
    <>
      <Background />
      <SearchBar location={location} setLocation={setLocation}/>
      <Display location={location} setLocation={setLocation}/>
    </>
  )
}

export default App
