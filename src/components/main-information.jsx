import '../styles/main-information.css'
import PropTypes from 'prop-types'

export default function MainInformation( { currentData }) {
  return (
    <div className="temp-display">
      <h3 className="temp">{currentData.temp_f}<span>°</span></h3>
      <h4>{currentData.condition.text}</h4>
      <div className="wind-details">
        <p>Feels Like: {currentData.feelslike_f}°</p>
        <p>Wind Speed: {currentData.gust_mph}</p>
      </div>
    </div>
  )
}

MainInformation.propTypes = {
  currentData: PropTypes.object
}