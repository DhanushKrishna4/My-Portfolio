import React from 'react';

const Projects = () => {
  const projects = [
    { title: "VoiceGuide AI", description: "A multilingual AI-powered travel itinerary planner.", tech: ["Python", "Streamlit", "Azure OpenAI"], link: "#" },
    { title: "AI-Powered PDF Summarizer", description: "Intelligent document processing tool.", tech: ["Python", "OpenAI API", "PyPDF2"], link: "#" },
    { title: "Automated Price Tracker", description: "Python automation script for e-commerce.", tech: ["Python", "BeautifulSoup4", "Requests"], link: "#" }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-100">
          Featured <span className="text-red-800">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-xl border border-red-900/30 hover:border-red-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(153,27,27,0.2)] group backdrop-blur-sm">
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-red-800 transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2 py-1 bg-red-950/30 text-red-200 rounded-md border border-red-900/40">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="inline-flex items-center text-sm font-semibold text-red-700 hover:text-red-600">View Code</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;