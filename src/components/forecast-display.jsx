
import { useEffect, useState } from 'react';

import '../styles/forecast-display.css'

export default function ForecastDisplay( { hourlyData } ) {
  const [ hourlyForecast, setHourlyForecast ] = useState([]); 

  useEffect(() => {
    const getNow = () => {
      const current = hourlyData.current;
      const temp = current.temp_f;
      const img = current.condition.icon;
  
      return [temp, img]
    }
    
    const getHour = (time) => {
      time = new Date(time);
      
      return time.getHours(); // Returns index value of last update time (ex: 00:00 returns 0)
    }

    const nowInfo = getNow();
    const nowHour = getHour(hourlyData.current.last_updated);

    let hourForecast = [];

    // Concat the hour section from both days together
    let forecastHours = hourlyData.forecast.forecastday[0].hour.concat(hourlyData.forecast.forecastday[1].hour);

    for (let i = nowHour; i < nowHour + 23; i++) {
      let hourData = forecastHours[i];
      hourForecast.push({
        time: getHour(hourData.time),
        temp: Math.round(hourData.temp_f),
        icon: hourData.condition.icon
      });
    }

    setHourlyForecast(hourForecast);

  }, [hourlyData])
  
  
  return (
    <div className="forecast-display">
      <div className="hourly-forecast-module">
        <p className="hour-title">Hourly Forecast</p>
        <div className="hour-section-container">
          {hourlyForecast.map((hour, index) =>(
            <div key={index} className="hour-section">
              <p className="hour-time">{index === 0 ? 'Now' : hour.time}</p>
              <div className='img-container'>
                <img className="hour-image" src={hour.icon} alt="" draggable="false" />
              </div>
              <p className="hour-temp">{hour.temp}°</p>
            </div> 
          ))}
        </div>
      </div>
    </div>
  )
}