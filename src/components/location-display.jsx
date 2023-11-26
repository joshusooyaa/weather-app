import '../styles/location-display.css'

export default function LocationDisplay( { locationName }) {

  return(
    <h2 className="location-title">{locationName}</h2>
  )
}