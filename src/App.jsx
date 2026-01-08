import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    // "135deg" creates the diagonal angle.
    // "rgba(153,27,27,0.4)" is the transparent red color.
    <div className="min-h-screen bg-[linear-gradient(135deg,black_20%,rgba(153,27,27,0.4)_50%,black_80%)] text-slate-200 font-sans selection:bg-red-500 selection:text-white">
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;