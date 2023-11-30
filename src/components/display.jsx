import MainInformation from './main-information'
import ForecastDisplay from './forecast-display'
import PropTypes from 'prop-types'

import '../styles/display.css'
import LocationDisplay from './location-display'

export default function Display( { currentData, hourlyData }) {
  return (
    <div className="main-display">
      <LocationDisplay locationName={currentData.location.name}/>
      <MainInformation currentData={currentData.current}/>
      <ForecastDisplay hourlyData={hourlyData}/>
    </div>
  )
}

Display.propTypes = {
  currentData: PropTypes.object,
  hourlyData: PropTypes.object
}