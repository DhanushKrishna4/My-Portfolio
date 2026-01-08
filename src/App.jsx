import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ShootingStars from './components/ShootingStars';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background layer */}
      <ShootingStars />
      
      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;