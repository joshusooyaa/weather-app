const numStars = 500;


const starColorPicker = () => {
  const randomNum = Math.random() * 100;
  if (randomNum < 1.5) { // 1.5% chance
    return 'red'
  }
  else {
    return 'white'
  }
}


const particlePresets = {
  "1000_0": { 
    particles: {
      number: {
          value: numStars,
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
  }
}

export default particlePresets