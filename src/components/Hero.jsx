import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Hi, I'm <span className="text-blue-500">Dhanush Krishna</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-slate-400 font-medium">
          Computer Science Student
        </h2>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Aspiring AI Engineer passionate about Machine Learning and algorithms.
        </p>

        <div className="flex items-center justify-center gap-2 text-slate-500 pb-4">
          <MapPin size={18} />
          <span>BITS Pilani Dubai Campus</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center gap-2">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="border border-slate-600 hover:border-white text-slate-300 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;