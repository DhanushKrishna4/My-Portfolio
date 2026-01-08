import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Minimalist Text Logo (Exactly like the original blue version) */}
        <div className="flex items-center group cursor-pointer">
          <div className="relative flex items-baseline">
            {/* "DK" is now just raw text, no background square */}
            <span className="text-2xl font-bold text-white tracking-tighter">
              DK
            </span>
            {/* The Red Dot - placed at the bottom right of the K */}
            <div className="w-2 h-2 bg-red-600 rounded-full ml-1 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
          </div>
          
          {/* Static White Name - Slides out on hover */}
          <span className="ml-4 font-bold text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
            Dhanush Krishna
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-red-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;