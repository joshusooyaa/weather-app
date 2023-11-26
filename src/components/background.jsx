import '../styles/background.css'
import ParticlesComponent from './particles'
import particlePresets from './particle-presets'
import Scene from './threeJS-scenes/test'

export default function Background() {
  return (
    <div className="background sunny">
      <ParticlesComponent type="1063"/>
    </div>
  )
}