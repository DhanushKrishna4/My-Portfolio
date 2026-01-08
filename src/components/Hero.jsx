import React from 'react';
import profilePic from '../assets/profile-pic.png'; // Make sure this path is correct for your image

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-4xl mx-auto">
        
        {/* Intro Text */}
        <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-4 tracking-wide">
          Hi, I'm
        </h2>
        
        {/* Name with Red Gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
            Dhanush Krishna
          </span>
        </h1>
        
        {/* Title */}
        <h3 className="text-2xl md:text-3xl text-slate-400 font-light mb-8">
          Computer Science Student
        </h3>
        
        {/* Description */}
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Aspiring AI Engineer passionate about Machine Learning and algorithms. 
          I build intelligent systems that solve real-world problems.
        </p>
        
        {/* Location Tag */}
        <div className="flex items-center justify-center gap-2 text-slate-500 mb-10 text-sm font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>BITS Pilani Dubai Campus</span>
        </div>

        {/* Buttons (Red Theme) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            View My Work →
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 font-medium hover:border-red-500 hover:text-red-400 transition-all duration-300 bg-slate-900/50"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;