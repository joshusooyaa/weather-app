import '../styles/background.css'

// Background images
import pageLayout from '../assets/background-images/home.png'
import tempBackground from '../assets/background-images/sky.png'

export default function Background() {
  return (
    <div className="background">
      <img src={tempBackground} alt="Temporary Page" />
    </div>
  )
}