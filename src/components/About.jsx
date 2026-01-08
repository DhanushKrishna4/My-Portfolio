import React from 'react';

const About = () => {
  const skills = ["Python", "C", "Java", "C++", "C#", "SQL", "HTML", "CSS", "JavaScript", "Scratch"];

  return (
    // CHANGE 2 & 3: Darkened background to pure black/neutral to make red pop
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-100">
          About <span className="text-red-700">Me</span>
        </h2>
        
        {/* CHANGE 3: Swapped slate background for neutral/red-tinted border */}
        <div className="bg-neutral-900/40 p-8 rounded-2xl border border-red-900/20 backdrop-blur-sm shadow-2xl shadow-red-900/5">
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            I am a senior Computer Science undergraduate at BITS Pilani Dubai Campus. 
            I am a Python enthusiast with a strong drive to explore the intersection of data and artificial intelligence.
          </p>

          <h3 className="text-xl font-semibold text-slate-100 mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                // CHANGE 3: Replaced blue-slate tags with deep red themed tags
                className="px-4 py-2 bg-neutral-950 text-slate-300 rounded-full text-sm font-medium border border-red-900/30 hover:border-red-600 hover:text-white hover:bg-red-950/40 transition-all duration-300 cursor-default"
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