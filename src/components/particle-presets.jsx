import cloudImg from '../assets/cloud.png'


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

const partyCloudyPreset = {
    particles: {
        number: {
          value: 5,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#fff"
        },
        shape: {
            type: "image",
            image: {
                src: cloudImg,
                width: 400,
                height: 200,
            }
        },
        opacity: {
          value: 1,
        },
        size: {
          value: 450,
          random: false,
          anim: {
            enable: true,
            speed: 7.5,
            size_min: 175,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: 1,
          direction: "right",
          random: false,
          straight: true,
          out_mode: "out",
          bounce: false,
        }
      },
}

const CloudyPreset = {
    particles: {
        number: {
          value: 17,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#838383"
        },
        shape: {
            type: "image",
            image: {
                src: cloudImg,
                width: 400,
                height: 250,
            }
        },
        opacity: {
          value: 1,
        },
        size: {
          value: 600,
          random: false,
          anim: {
            enable: true,
            speed: 7.5,
            size_min: 200,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: .5,
          direction: "right",
          random: false,
          straight: true,
          out_mode: "out",
        }
      },
}

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
            value: 15,
            random: true,
        },
        move: {
            enable: true,
            speed: 55,
            direction: "bottom",
            straight: true,
            out_mode: 'out',
        },
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
            straight: false,
            out_mode: 'out',
        }
    },
};

const heavySnowPreset = {
    particles: {
        number: {
            value: 90, // Number of particles (raindrops)
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
        },
        size: {
            value: 15,
            random: true,
        },
        move: {
            enable: true,
            speed: 12,
            direction: "bottom",
            straight: false,
            out_mode: 'out',
        }
    },
};

const ParticlePresets = [
    clearNightPreset,
    partyCloudyPreset,
    CloudyPreset,
    lightRainPreset,
    heavyRainPreset,
    snowPreset,
    heavySnowPreset,
    "",
];

export default ParticlePresets;