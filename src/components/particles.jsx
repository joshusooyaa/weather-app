import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
// import { loadFull }  from 'tsparticles';
import { useCallback, useMemo } from 'react';
import particlePresets from './particle-presets';

import PropTypes from 'prop-types'

const ParticlesComponent = ( {code} ) => {
  const options = useMemo(() => {
    const ClearSunny = [1000];
    const PartlyCloudy = [1003];
    const Cloudy = [1006, 1009, 1030, 1135, 1147];
    const LightRain = [1063, 1180, 1183];
    const RainHeavyRain = [1186, 1189, 1192, 1195, 1240, 1243, 1246, 1273, 1276];
    const Snowy = [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282, 1069, 1204, 1207, 1249, 1252, 1261, 1264, 1072, 1150, 1153, 1168, 1171, 1198, 1201];

    let ind = 0;
    if (ClearSunny.includes(code)) {
      ind = 0;
    } else if (PartlyCloudy.includes(code)) {
      ind = 0;
    } else if (Cloudy.includes(code)) {
      ind = 0;
    } else if (LightRain.includes(code)) {
      ind = 1;
    } else if (RainHeavyRain.includes(code)) {
      ind = 2;
    } else if (Snowy.includes(code)) {
      ind = 3;
    }
    console.log(code)
    return particlePresets[ind];
  }, [code]);
  
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
}

ParticlesComponent.propTypes = {
  type: PropTypes.string,
}

export default ParticlesComponent;