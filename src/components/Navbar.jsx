import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        
        {/* LOGO FIXED: Removed 'flex', 'items-baseline', and 'font-mono'. 
            Standard text rendering ensures the dot sits on the natural baseline. */}
        <a href="#home" className="text-2xl font-bold text-white">
          DK<span className="text-red-600">.</span>
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