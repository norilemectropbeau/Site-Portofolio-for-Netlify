import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      <CursorEffect />
      <ParticleBackground />
      <div className="fixed bottom-6 right-6 z-50">
        <AudioPlayer 
          audioUrl="https://youtu.be/ocdxuomafsu?si=iw4gphrn0zdhmra_" 
          title="Consume - Chase Atlantic" 
        />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;