import React, { useState } from 'react';
import { Palette, Cuboid as Cube, Cpu, Gamepad2, Wand2, Layers, CheckCircle } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  title: string;
}

const Skills: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const skills: Skill[] = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Graphic Designer"
    },
    {
      icon: <Cube className="w-6 h-6" />,
      title: "3D Artist"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "128 IQ"
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "FPS Player"
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Stylized & Realism Ready"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Scene Compose"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "WASD Certified"
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-black to-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="magical-text">Skillset</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A diverse collection of abilities that enable me to bring your creative visions to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`magic-card group transition-all duration-500 cursor-pointer ${
                hoveredIndex === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary-900/50 text-primary-400 group-hover:text-white group-hover:bg-primary-700 transition-colors duration-300 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-display font-bold group-hover:magical-text">{skill.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;