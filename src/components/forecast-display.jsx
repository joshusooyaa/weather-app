
import { useEffect, useState, useRef } from 'react';

import '../styles/forecast-display.css'

export default function ForecastDisplay( { hourlyData } ) {
  const [ hourlyForecast, setHourlyForecast ] = useState([]); 

  const forecastSliderRef = useRef(null);
  const isDownRef = useRef(false);
  const startMousePosition = useRef(null);
  const sliderStartingPosition = useRef(null);

  useEffect(() => {
    const getHour = (time) => {
      time = new Date(time);
      
      return time.getHours(); // Returns index value of last update time (ex: 00:00 returns 0)
    }

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

  useEffect(() => {
    return(() => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    })
  }, [])
  
  const onMouseDown = (e) => {
    isDownRef.current = true;
    startMousePosition.current = e.pageX - forecastSliderRef.current.offsetLeft;
    sliderStartingPosition.current = forecastSliderRef.current.scrollLeft; 

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e) => {
    if (!isDownRef.current) return;
    e.preventDefault();
    const currentMousePosition = e.pageX - forecastSliderRef.current.offsetLeft; 
    const distanceToMove = (currentMousePosition - startMousePosition.current); 
    forecastSliderRef.current.scrollLeft = sliderStartingPosition.current - distanceToMove;
  }

  const onMouseUp = () => {
    isDownRef.current = false;
  }

  return (
    <div className="forecast-display">
      <div className="hourly-forecast-module">
        <p className="hour-title">Hourly Forecast</p>
        <div className="hour-section-container"
          ref={forecastSliderRef}
          onMouseDown={onMouseDown}
        >
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