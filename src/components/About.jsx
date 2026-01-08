import React from 'react';

const About = () => {
  const skills = ["Python", "C", "Java", "C++", "C#", "SQL", "HTML", "CSS", "JavaScript", "Scratch"];

  return (
    <section id="about" className="py-20 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-100">
          About <span className="text-red-500">Me</span>
        </h2>
        
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            I am a senior Computer Science undergraduate at BITS Pilani Dubai Campus. 
            I am a Python enthusiast with a strong drive to explore the intersection of data and artificial intelligence.
          </p>

          <h3 className="text-xl font-semibold text-slate-100 mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700 hover:border-red-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;