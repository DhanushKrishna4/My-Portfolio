import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative z-10">
      <div className="text-center px-4">
        <h2 className="text-xl md:text-2xl text-slate-400 mb-4">Hi, I'm</h2>
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-red-600">Dhanush</span> Krishna
        </h1>
        <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
          Computer Science Student
        </p>
        <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-8">
          Aspiring AI Engineer passionate about Machine Learning and algorithms. I build intelligent systems that solve real-world problems.
        </p>
        
        {/* Restored Location from Screenshot */}
        <div className="flex items-center justify-center gap-2 text-slate-500 mb-10">
          <MapPin size={16} />
          <span className="text-sm">BITS Pilani Dubai Campus</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white rounded-full font-medium transition-all flex items-center gap-2 group"
          >
            View My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border border-zinc-800 hover:border-red-900/50 rounded-full font-medium transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;