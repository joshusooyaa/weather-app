import '../styles/background.css'

// Background images
import pageLayout from '../assets/background-images/home.png'

export default function Background() {
  return (
    <div className="background">
      <img src={pageLayout} alt="Temporary Page" />
    </div>
  )
}