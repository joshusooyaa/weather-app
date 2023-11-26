import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
// import { loadFull }  from 'tsparticles';
import { useCallback, useMemo } from 'react';
import particlePresets from './particle-presets';

import PropTypes from 'prop-types'

const ParticlesComponent = ( {index} ) => {
  const options = useMemo(() => {
    console.log('updating background')
    return particlePresets[index];
  }, [index]);
  
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
}

ParticlesComponent.propTypes = {
  type: PropTypes.string,
}

export default ParticlesComponent;