import React from 'react';

const About = () => {
  const skills = [
    "Python", "C", "Java", "C++", "C#", "SQL", "HTML", "CSS", "JavaScript", "Scratch"
  ];

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-8 w-1 bg-red-600"></div>
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>
        
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl mb-12">
          <p className="text-slate-300 text-lg leading-relaxed">
            I am a senior Computer Science undergraduate at BITS Pilani Dubai Campus. I am a Python enthusiast 
            with a strong drive to explore the intersection of data and artificial intelligence. I enjoy building 
            tools that solve real-world problems and automate complex tasks.
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-slate-300 hover:border-red-900/50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;