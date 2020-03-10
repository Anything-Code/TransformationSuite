import 'particles.js'

export default ({ app }, inject) => {
  inject('particles', () => {
    if (document.querySelector('#particles'))
    particlesJS('particles', {
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: ['grab', 'repulse']
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: .3
            }
          },
          bubble: {
            distance: 200,
            size: 4,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 0
          },
          push: {
            particles_nb: 2
          },
          remove: {
            particles_nb: 0
          }
        }
      },
      particles: {
        number: {
          value: 50,
          density: {
            enable: false,
            value_area: 800
          }
        },
        color: {
          value: '#000000' // 00B1EF
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: '#ffffff'
          },
          polygon: {
            nb_sides: 3
          }
        },
        opacity: {
          value: .6,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: .2,
            sync: false
          }
        },
        size: {
          value: 3,
          random: false,
          anim: {
            enable: false,
            speed: 80,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 300,
          color: '#000000',
          opacity: .25,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      retina_detect: true
    });
  });
}