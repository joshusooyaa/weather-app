
const clearNightPreset = { 
  particles: {
    number: {
        value: 500,
        density: {
            enable: true,
            value_area: 800
        }
    },
    color: {
        value: ["#ffffff", "#ffffff", "#ffffff","#ffffff", "#ffffff", "#ffffff","#ffffff", "#ffffff", "#ffffff","#FFF000","#FF000"] // Make red appear less
    },
    shape: {
        type: "circle"
    },
    opacity: {
        value: 1,
        random: true,
        anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false
        }
    },
    size: {
        value: 1, 
        random: {
          enable: true,
          minimumValue: .5,
        },
        anim: {
            enable: false
        }
    },
  },
};

const lightRainPreset = {
    particles: {
        number: {
            value: 1, // Number of particles (raindrops)
        },
        color: {
            value: '99bcf8',
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.8,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 8,
            random: false,
        },
        move: {
            enable: true,
            speed: 60,
            direction: "bottom",
            straight: true
        }
    },
};

const heavyRainPreset = {
    particles: {
        number: {
            value: 25, // Number of particles (raindrops)
        },
        color: {
            value: '003ea7',
        },
        shape: {
            type: "edge",
        },
        opacity: {
            value: 0.8,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 15,
            random: true,
        },
        move: {
            enable: true,
            speed: 55,
            direction: "bottom",
            straight: true
        }
    },
};

const snowPreset = {
    particles: {
        number: {
            value: 25, // Number of particles (raindrops)
        },
        color: {
            value: 'd0d0d0',
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 8,
            random: true,
        },
        move: {
            enable: true,
            speed: 4,
            direction: "bottom",
            straight: true
        }
    },
};

const sunPreset = {
    particles: {
        number: {
          value: 1, // Set to 1 to have a single particle
        },
        color: {
          value: '#fffc00', // Color of the particle (yellow)
        },
        shape: {
          type: 'circle', // Shape of the particle
        },
        opacity: {
          value: 1, // Set to 1 for full opacity
        },
        size: {
          value: 200, // Size of the particle
        },
        move: {
          enable: false, // Disable particle movement
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: false, // Disable hover effect
          },
        },
      },
      retina_detect: true,
}

const ParticlePresets = [
    clearNightPreset,
    lightRainPreset,
    heavyRainPreset,
    snowPreset,
    sunPreset
];

export default ParticlePresets;