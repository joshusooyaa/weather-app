
import { useEffect, useState, useRef } from 'react';

import '../styles/forecast-display.css'

export default function ForecastDisplay( { hourlyData } ) {
  const [ hourlyForecast, setHourlyForecast ] = useState([]); 
  const [ isDown, setIsDown ] = useState(false);
  const [ startMousePosition, setStartMousePosition ] = useState(null);
  const [ sliderStartingPosition, setSliderStartingPosition ] = useState(null);

  const forecastSliderRef = useRef(null);
  const sliderContainerRef = useRef(null);

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
  
  const onMouseDown = (e) => {
    setIsDown(true);
    setStartMousePosition(e.pageX - forecastSliderRef.current.offsetLeft);
    setSliderStartingPosition(forecastSliderRef.current.scrollLeft); 
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const currentMousePosition = e.pageX - forecastSliderRef.current.offsetLeft; 
    const distanceToMove = (currentMousePosition - startMousePosition); 
    forecastSliderRef.current.scrollLeft = sliderStartingPosition - distanceToMove;
  }

  const onMouseLeave = () => {
    setIsDown(false);
  }

  const onMouseUp = () => {
    setIsDown(false);
  }


  return (
    <div className="forecast-display">
      <div ref={sliderContainerRef} className="hourly-forecast-module">
        <p className="hour-title">Hourly Forecast</p>
        <div className="hour-section-container"
          ref={forecastSliderRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
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