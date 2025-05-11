import React from 'react';
import { Twitter, FenceIcon as BehanceIcon, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Let's create <span className="magical-text">magic</span> together
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Have a project in mind? Let's collaborate and bring your vision to life with stunning graphics and 3D artistry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="magic-card">
              <h3 className="text-lg font-display font-bold mb-2">Services</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Graphic Design</li>
                <li>3D Modeling</li>
                <li>Scene Composition</li>
                <li>Brand Identity</li>
              </ul>
            </div>
            
            <div className="magic-card">
              <h3 className="text-lg font-display font-bold mb-2">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#home" className="hover:text-primary-400 transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="hover:text-primary-400 transition-colors duration-200">About</a></li>
                <li><a href="#skills" className="hover:text-primary-400 transition-colors duration-200">Skills</a></li>
                <li><a href="#contact" className="hover:text-primary-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} nori. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://x.com/@norigfx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-700 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://behance.net/norigraph"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-700 transition-colors duration-200"
              aria-label="Behance"
            >
              <BehanceIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://discord.com/users/noridzn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-700 transition-colors duration-200"
              aria-label="Discord"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;