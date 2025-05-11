import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  element: HTMLDivElement;
}

const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);
  const numParticles = 15;

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      createParticle();
    }
    
    // Animation loop
    const animateParticles = () => {
      particles.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Check boundaries and reverse direction if needed
        if (particle.x <= 0 || particle.x >= window.innerWidth) {
          particle.speedX *= -1;
        }
        
        if (particle.y <= 0 || particle.y >= window.innerHeight) {
          particle.speedY *= -1;
        }
        
        // Update element position
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
      });
      
      requestAnimationFrame(animateParticles);
    };
    
    animateParticles();
    
    // Handle window resize
    const handleResize = () => {
      particles.current.forEach(particle => {
        if (particle.x > window.innerWidth) {
          particle.x = Math.random() * window.innerWidth;
        }
        if (particle.y > window.innerHeight) {
          particle.y = Math.random() * window.innerHeight;
        }
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      // Clean up particles
      particles.current.forEach(particle => {
        particle.element.remove();
      });
      particles.current = [];
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const createParticle = () => {
    if (!containerRef.current) return;
    
    const particleElement = document.createElement('div');
    particleElement.classList.add('particle');
    
    const size = Math.random() * 10 + 3;
    particleElement.style.width = `${size}px`;
    particleElement.style.height = `${size}px`;
    particleElement.style.opacity = (Math.random() * 0.5 + 0.1).toString();
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    particleElement.style.left = `${x}px`;
    particleElement.style.top = `${y}px`;
    
    const speedX = Math.random() * 0.2 - 0.1;
    const speedY = Math.random() * 0.2 - 0.1;
    
    containerRef.current.appendChild(particleElement);
    
    particles.current.push({
      x,
      y,
      size,
      speedX,
      speedY,
      element: particleElement
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    ></div>
  );
};

export default ParticleBackground;