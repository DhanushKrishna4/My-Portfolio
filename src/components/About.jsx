import React from 'react';

const About = () => {
  const skills = ["Python", "C", "Java", "C++", "C#", "SQL", "HTML", "CSS", "JavaScript", "Scratch"];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-100">
          About <span className="text-red-700">Me</span>
        </h2>
        <div className="bg-white/5 p-8 rounded-2xl border border-red-900/20 backdrop-blur-sm shadow-2xl shadow-red-900/5">
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            I am a senior Computer Science undergraduate at BITS Pilani Dubai Campus. 
          </p>
          <h3 className="text-xl font-semibold text-slate-100 mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-black/40 text-slate-300 rounded-full text-sm font-medium border border-red-900/30 hover:border-red-600 hover:text-white hover:bg-red-950/40 transition-all duration-300 cursor-default">
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