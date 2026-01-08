import React from 'react';

const About = () => {
  const skills = [
    "Python", "C", "Java", "C++", "C#", 
    "SQL", "HTML", "CSS", "JavaScript", "Scratch"
  ];

  return (
    <section id="about" className="py-24 bg-slate-800/50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-l-4 border-blue-500 pl-4">About Me</h2>
        
        <div className="text-slate-300 text-lg mb-10 leading-relaxed bg-slate-900 p-6 rounded-xl border border-slate-800">
          <p>
            I am a senior Computer Science undergraduate at BITS Pilani Dubai Campus. 
            I am a Python enthusiast with a strong drive to explore the intersection of data 
            and artificial intelligence. I enjoy building tools that solve real-world problems 
            and automate complex tasks.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-6 text-white">Technical Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="bg-slate-900 hover:bg-slate-700 text-blue-400 px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 transition duration-300 cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;