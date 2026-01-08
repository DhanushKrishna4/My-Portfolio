import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          I am currently looking for internships and new opportunities. Whether you have a 
          question or just want to say hi, feel free to reach out!
        </p>

        <a 
          href="mailto:dhanushkrishna2004@gmail.com" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-red-700 hover:bg-red-800 text-white rounded-full font-medium transition-all mb-12 group"
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div className="flex justify-center gap-8">
          <a 
            href="https://github.com/dhanushkrishna4/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-red-500 transition-colors"
            title="GitHub"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/dhanushkrishna0611/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-red-500 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="https://www.instagram.com/dhanushkrishna11/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-red-500 transition-colors"
            title="Instagram"
          >
            <Instagram size={28} />
          </a>
        </div>
        
        <p className="mt-20 text-slate-500 text-sm">
          © 2026 Dhanush Krishna. Built with React & Tailwind.
        </p>
      </div>
    </section>
  );
};

export default Contact;