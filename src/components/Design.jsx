import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 


function Design() {
        const particlesInit = useCallback(async engine => {

        await loadSlim(engine);
    }, []);

     const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
     <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": -1
                    },
                    "particles": {
                        "number": {
                            "value": 70,
                            "density": {
                                "enable": false,
                                "value_area": 1000
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                       
                        "size": {
                            "value": 3,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        },
                     
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 3
                        },
                    },
                   
                    "retina_detect": true,
                    "background": {
                        "color": "transparent",
                        "image": "",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "cover"
                    }
                }}
            />
  );
}

export default Design;