import '../styles/background.css'
import ParticlesComponent from './particles'

import { useState, useEffect } from 'react'
import SunnyScene from './threeJS-scenes/sunny-scene'

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

  }, [code, isDay])

  const getIndex = (code) => {
    const ClearSunny = [1000];
    const PartlyCloudy = [1003];
    const Cloudy = [1006, 1009, 1030, 1135, 1147];
    const LightRain = [1150, 1183, 1153, 1240, 1243, 1246, 1249, 1273, 1276, 1063, 1168, 1171, 1198, 1201];
    const RainHeavyRain = [1180, 1186, 1189, 1192, 1195];
    const Snow = [1066, 1114, 1210, 1213, 1216, 1219, 1222, 1255, 1258, 1279, 1282];
    const HeavySnow = [1117, 1225, 1246];

    if (ClearSunny.includes(code)) {
      if (isDay) {
        return [7, 'sunny']
      }
      return [0, 'clear'];
    } else if (PartlyCloudy.includes(code)) {
      return [1, 'p-cloudy'];
    } else if (Cloudy.includes(code)) {
      return [2, 'cloudy'];
    } else if (LightRain.includes(code)) {
      return [3, 'l-rain'];
    } else if (RainHeavyRain.includes(code)) {
      return [4, 'rain'];
    } else if (Snow.includes(code)) {
      return [5, 'snow'];
    } else if (HeavySnow.includes(code)) {
      return [6, 'h-snow'];
    } else {
      console.log("code missing: ", code)
      return [7, 'sunny']
    }
  }
  
  return (
    <div className={`background ${backgroundClasses}`}>
      {isDay == 1 && (index == 1 || index == 7) ? (
        <>
          <SunnyScene/>
          <ParticlesComponent index={index}/>
        </>
      ) : (
        <ParticlesComponent index={index}/>
      )}
    </div>
  )
}