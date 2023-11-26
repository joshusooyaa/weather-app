import '../styles/background.css'
import ParticlesComponent from './particles'

import { useState, useEffect } from 'react'
import particlePresets from './particle-presets'
import Scene from './threeJS-scenes/test'

export default function Background( {code} ) {
  const [ index, setIndex ] = useState(0)

  useEffect(() => {
    const newIndex = getIndex(code);
    if (newIndex != index) {
      setIndex(newIndex);
    }
  }, [code])

  const getIndex = (code) => {
    const ClearSunny = [1000];
    const PartlyCloudy = [1003];
    const Cloudy = [1006, 1009, 1030, 1135, 1147];
    const LightRain = [1063, 1180, 1183];
    const RainHeavyRain = [1186, 1189, 1192, 1195, 1240, 1243, 1246, 1273, 1276];
    const Snowy = [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282, 1069, 1204, 1207, 1249, 1252, 1261, 1264, 1072, 1150, 1153, 1168, 1171, 1198, 1201];

    if (ClearSunny.includes(code)) {
      return 0;
    } else if (PartlyCloudy.includes(code)) {
      return 0;
    } else if (Cloudy.includes(code)) {
      return 0;
    } else if (LightRain.includes(code)) {
      return 1;
    } else if (RainHeavyRain.includes(code)) {
      return 2;
    } else if (Snowy.includes(code)) {
      return 3;
    }
  }
  
  return (
    <div className="background">
      <ParticlesComponent index={index}/>
    </div>
  )
}