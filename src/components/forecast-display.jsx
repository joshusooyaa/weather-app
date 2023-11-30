
import '../styles/forecast-display.css'

export default function ForecastDisplay() {
  return (
    <div className="forecast-display">
      <div className="hourly-forecast-module">
        <p className="hour-title">Hourly Forecast</p>
        <div className="hour-section-container">
          <div className="hour-section">
            <p className="hour-time">Now</p>
            <div className='img-container'>
              <img className="hour-image" src="//cdn.weatherapi.com/weather/64x64/night/143.png" alt="" />
            </div>
            <p className="hour-temp">5*</p>
          </div>
        </div>
      </div>
    </div>
  )
}