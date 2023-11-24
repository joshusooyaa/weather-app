import '../styles/temp-display.css'
import PropTypes from 'prop-types'

export default function TempDisplay( { tempF }) {
  return (
    <div className="temp-display">
      {tempF}
    </div>
  )
}

TempDisplay.propTypes = {
  tempF: PropTypes.number,
}