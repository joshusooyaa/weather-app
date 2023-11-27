import '../styles/background.css'
import ParticlesComponent from './particles'

import { useState, useEffect } from 'react'
import particlePresets from './particle-presets'
import SunnyScene from './threeJS-scenes/test'

export default function Background( {code, isDay} ) {
  const [ index, setIndex ] = useState(0)
  const [ backgroundClasses, setBackgroundClasses ] = useState('')
  
  useEffect(() => {
    const l = getIndex(code);
    const newIndex = l[0];
    const weather = l[1];
    if (newIndex != index) {
      setIndex(newIndex);
    }

    setBackgroundClasses(weather + ' _' + isDay)

  }, [code])

  const getIndex = (code) => {
    const ClearSunny = [1000];
    const PartlyCloudy = [1003];
    const Cloudy = [1006, 1009, 1030, 1135, 1147];
    const LightRain = [1150, 1183, 1153, 1240, 1243, 1246, 1249, 1273, 1276, 1063, 1168, 1171, 1198, 1201];
    const RainHeavyRain = [1180, 1186, 1189, 1192, 1195];
    const Snowy = [1066, 1069, 1072, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1261, 1264, 1204, 1207, 1255, 1258];

    console.log(code)
    if (ClearSunny.includes(code)) {
      if (isDay) {
        console.log("it's day")
        return [4, 'clear']
      }
      return [0, 'clear'];
    } else if (PartlyCloudy.includes(code)) {
      return [0, 'p-cloudy'];
    } else if (Cloudy.includes(code)) {
      return [0, 'cloudy'];
    } else if (LightRain.includes(code)) {
      return [1, 'l-rain'];
    } else if (RainHeavyRain.includes(code)) {
      return [2, 'rain'];
    } else if (Snowy.includes(code)) {
      return [3, 'snow'];
    }
    else {
      console.log("code missing: ", code)
    }
  }
  
  return (
    <div className={`background ${backgroundClasses}`}>
      <ParticlesComponent index={index}/>
      {isDay == 1 && index == 0 && (
        <SunnyScene/>
      )}
    </div>
  )
}