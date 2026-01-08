import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-4 tracking-wide">Hi, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {/* Removed gradient and glow; changed to static red-700 for clarity */}
          <span className="text-red-700">
            Dhanush Krishna
          </span>
        </h1>
        <h3 className="text-2xl md:text-3xl text-slate-400 font-light mb-8">Computer Science Student</h3>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Aspiring AI Engineer passionate about Machine Learning and algorithms. 
          I build intelligent systems that solve real-world problems.
        </p>
        <div className="flex items-center justify-center gap-2 text-slate-500 mb-10 text-sm font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <span>BITS Pilani Dubai Campus</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="px-8 py-3 rounded-full bg-red-800 text-white font-semibold hover:bg-red-900 hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(153,27,27,0.4)]">
            View My Work →
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-red-950/40 text-slate-300 font-medium hover:border-red-700 hover:text-white hover:bg-red-950/20 transition-all duration-300 bg-transparent backdrop-blur-sm">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;