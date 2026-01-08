import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        
        {/* LOGO RESTORED: 
            1. 'group': Enables hover effects.
            2. 'items-baseline': Keeps the dot aligned with the text bottom.
            3. Hidden span: Slides out 'Dhanush Krishna' on hover.
        */}
        <a href="#home" className="text-2xl font-bold text-white flex items-baseline gap-0.5 group cursor-pointer">
          <span>DK</span>
          <span className="text-red-600">.</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out text-slate-300 text-lg font-normal">
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