import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
// import { loadFull }  from 'tsparticles';
import { useCallback, useMemo } from 'react';
import particlePresets from './particle-presets';

import PropTypes from 'prop-types'

const ParticlesComponent = ( {type} ) => {
  const options = useMemo(() => {
    return particlePresets[type];
  }, []);
  
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
}

ParticlesComponent.propTypes = {
  type: PropTypes.string,
}

export default ParticlesComponent;