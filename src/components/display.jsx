import TempDisplay from './temp-display'
import ForecastDisplay from './forecast-display'

import '../styles/display.css'

export default function Display() {
  return (
    <div className="main-display">
      <TempDisplay />
      <ForecastDisplay />
    </div>
  )
}