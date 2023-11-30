
import '../styles/forecast-display.css'

export default function ForecastDisplay( { hourlyData } ) {
  const getNow = () => {
    const current = hourlyData.current;
    const temp = current.temp_f;
    const img = current.condition.icon;

    return [temp, img]
  }
  
  const getLastUpdate = () => {
    const lastUpdate = hourlyData.current.last_updated;
    const time = new Date(lastUpdate);
    
    return time.getHours(); // Returns index value of last update time (ex: 00:00 returns 0)
  }
  
  return (
    <div className="forecast-display">
      <div className="hourly-forecast-module">
        <p className="hour-title">Hourly Forecast</p>
        <div className="hour-section-container">
          <div className="hour-section">
            <p className="hour-time">Now</p>
            <div className='img-container'>
              <img className="hour-image" src="//cdn.weatherapi.com/weather/64x64/night/143.png" alt="" draggable="false" />
            </div>
            <p className="hour-temp">5°</p>
          </div>
        </div>
      </div>
    </div>
  )
}