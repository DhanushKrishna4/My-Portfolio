import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-800/50 text-center px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
        <p className="text-slate-400 mb-10 text-lg">
          I am currently looking for internships and new opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <a href="mailto:dhanushk0611@gmail.com" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 mb-12 shadow-lg shadow-blue-500/20">
          <Mail size={20} />
          Say Hello
        </a>

        <div className="flex justify-center gap-8">
          <a href="https://github.com/dhanushkrishna4" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/dhanushkrishna0611/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-blue-500 hover:bg-slate-700 transition-all">
            <Linkedin size={28} />
          </a>
          <a href="https://www.instagram.com/dhanushkrishna11/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-pink-500 hover:bg-slate-700 transition-all">
            <Instagram size={28} />
          </a>
        </div>
        
        <div className="mt-16 text-slate-600 text-sm">
          <p>© 2026 Dhanush Krishna. Built with React & Tailwind.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;