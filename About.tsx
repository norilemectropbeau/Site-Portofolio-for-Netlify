import React from 'react';
import { CalendarDays, Brain, Award, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="magical-text">nori</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="magic-card">
              <h3 className="text-xl font-display font-bold mb-4">The Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Hi! I'm nori, I'm graphic designer and 3D artist, from my earliest childhood
                I was passionate about graphics, today 14 years I am still continuing my passion
                I sell my graphic services to all types of people, companies; Normal person
                Singer etc..
              </p>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <CalendarDays className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">14+ years of creative experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">128 IQ - Technical & creative problem solver</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">WASD Certified professional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Stylized & Realism Ready artist</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            {[
              { title: "Attention to Detail", value: "99%" },
              { title: "3D Modeling", value: "95%" },
              { title: "Scene Composition", value: "98%" },
              { title: "FPS Gaming", value: "97%" }
            ].map((skill, index) => (
              <div key={index} className="magic-card">
                <h4 className="text-lg font-display mb-2">{skill.title}</h4>
                <div className="w-full bg-gray-700/30 rounded-full h-2.5 mb-1">
                  <div 
                    className="bg-gradient-to-r from-primary-600 to-accent-500 h-2.5 rounded-full" 
                    style={{ width: skill.value }}
                  ></div>
                </div>
                <p className="text-right text-xs text-primary-400">{skill.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;