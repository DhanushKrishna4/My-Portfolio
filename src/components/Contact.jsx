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
          href="mailto:dhanushk0611@gmail.com" 
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
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
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