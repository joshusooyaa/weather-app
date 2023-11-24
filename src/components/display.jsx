import TempDisplay from './temp-display'
import ForecastDisplay from './forecast-display'
import PropTypes from 'prop-types'

import '../styles/display.css'

export default function Display( { tempF }) {
  return (
    <div className="main-display">
      <TempDisplay tempF={tempF}/>
      <ForecastDisplay />
    </div>
  )
}

Display.propTypes = {
  tempF: PropTypes.number,
}