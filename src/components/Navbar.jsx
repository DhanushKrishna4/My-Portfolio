import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        
        {/* LOGO UPDATE: 
            - Added 'text-7xl leading-none' to the dot.
            - This makes it 3x the size of the base text (1.5rem -> 4.5rem).
            - 'leading-none' prevents it from messing up the navbar height.
            - 'items-baseline' keeps it aligned at the bottom.
        */}
        <a href="#home" className="text-2xl font-bold text-white flex items-baseline gap-0.5 group cursor-pointer">
          <span>DK</span>
          <span className="text-red-600 text-7xl leading-none">.</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out text-slate-300 text-lg font-normal whitespace-nowrap">
            &nbsp;Dhanush Krishna
          </span>
        </a>
        
        <div className="flex gap-8 items-center">
          <a href="#home" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Home</a>
          <a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">About</a>
          <a href="#projects" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Projects</a>
          <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;