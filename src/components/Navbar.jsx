import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm fixed w-full z-50 top-0 start-0 border-b border-slate-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="text-2xl font-bold text-white tracking-tighter">
          DK<span className="text-blue-500">.</span>
        </a>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 hover:text-white">
             {isOpen ? <X /> : <Menu />}
        </button>

        <div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 bg-slate-800 md:bg-transparent rounded-lg">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="block py-2 px-3 text-slate-300 hover:text-blue-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;