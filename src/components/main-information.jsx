import '../styles/main-information.css'
import PropTypes from 'prop-types'

export default function MainInformation( { tempF }) {
  return (
    <div className="temp-display">
      <h3>{tempF}</h3>
    </div>
  )
}

MainInformation.propTypes = {
  tempF: PropTypes.number,
}