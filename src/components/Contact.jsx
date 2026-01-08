import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
          Get In <span className="text-red-800">Touch</span>
        </h2>
        <p className="text-slate-400 mb-10 text-lg">
          I am currently looking for internships and new opportunities.
        </p>
        
        <a 
          href="mailto:email@example.com" 
          className="inline-block px-8 py-4 rounded-full bg-red-900 text-white font-semibold text-lg hover:bg-red-950 hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(153,27,27,0.4)]"
        >
          👋 Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;