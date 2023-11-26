import MainInformation from './main-information'
import ForecastDisplay from './forecast-display'
import PropTypes from 'prop-types'

import '../styles/display.css'
import LocationDisplay from './location-display'

export default function Display( { tempF, locationName }) {
  return (
    <div className="main-display">
      <LocationDisplay locationName={locationName}/>
      <MainInformation tempF={tempF}/>
      <ForecastDisplay />
    </div>
  )
}

Display.propTypes = {
  tempF: PropTypes.number,
  locationName: PropTypes.string,
}