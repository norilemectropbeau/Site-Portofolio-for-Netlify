import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const deltaX = (e.clientX - centerX) / 25;
      const deltaY = (e.clientY - centerY) / 25;
      
      imageRef.current.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-80px)]">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              <span className="magical-text">Magic</span> in every <br/>
              <span className="magical-text">pixel</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-display italic text-gray-300 mb-6">Graphic Designer & 3D Artist</h2>
            
            <p className="text-gray-400 mb-8 max-w-lg">
              Transforming visions into digital reality for over a decade, crafting experiences that blend technical precision with artistic innovation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#about" 
                className="px-6 py-3 rounded-full bg-primary-700 hover:bg-primary-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-700/30"
              >
                Discover My Work
              </a>
              <a 
                href="#skills" 
                className="px-6 py-3 rounded-full bg-transparent border border-primary-700 text-primary-400 hover:text-white hover:bg-primary-700/20 font-medium transition-all duration-300"
              >
                View Skills
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-primary-700/30 rounded-full overflow-hidden animate-glow">
              <img 
                ref={imageRef}
                src="https://cdn.discordapp.com/attachments/1363159596558061779/1371073386666786876/fa9a0fd3f161a7b766fdc893dce4bd19.jpg?ex=6821cf18&is=68207d98&hm=a1b6d27492deb5164778cc0e45197d1368cee35818bd9b72be741b8de2d6d1a1" 
                alt="Nori - Graphic Designer & 3D Artist" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-200"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="w-10 h-10 text-primary-500 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;