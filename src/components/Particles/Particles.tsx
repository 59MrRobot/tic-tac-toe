import React, { useEffect } from "react";
import { gsap, Power1 } from "gsap";
import "./Particles.scss";

export const Particles: React.FC = React.memo(
  () => {
    useEffect(() => {
      let count = 100;
      const particleClass = 'particle';
      const particleColors = ['#044389', '#FCFF4B', '#FFAD05', '#7CAFC4', '#5995ED'];
      const particles = document.getElementById('particles');
      const w = particles?.offsetWidth;
      const h = particles?.offsetHeight;

      for (let i = 0; i < count; i++) {
        let particle = document.createElement('div');

        particle.className = particleClass;
        particles?.appendChild(particle);

        if (w && h) {
          gsap.set(particle, {
            x: gsap.utils.random(0, w),
            y: gsap.utils.random(0, h) - (h - 0.5),
            scale: gsap.utils.random(0.5, 1),
            backgroundColor: gsap.utils.random(particleColors),
          })
          animate(particle, h);
        }
      }
    }, []);

    return (
      <div className="particles" id="particles"></div>
    );
  },
);

function animate(particle: HTMLDivElement, h: number) {
  gsap.to(particle, {
    y: h,
    duration: gsap.utils.random(1, 6),
    ease: 'none', 
    repeat: -1,
    delay: -10,
  });

  gsap.to(particle, {
    x: '+=50',
    duration: gsap.utils.random(5, 10),
    ease: Power1.easeInOut, 
    repeat: -1,
    yoyo: true,
  });

  // gsap.to(particle, {
  //   opacity: 0,
  //   duration: gsap.utils.random(1, 6),
  //   ease: Power1.easeInOut, 
  //   repeat: -1,
  //   yoyo: true,
  // });
}