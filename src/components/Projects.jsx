import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "VoiceGuide AI",
      description: "A multilingual AI-powered travel itinerary planner with voice recognition.",
      tech: ["Python", "Streamlit", "Azure OpenAI"],
      link: "#"
    },
    {
      title: "AI-Powered PDF Summarizer",
      description: "An intelligent document processing tool that generates concise summaries using GPT-3.5.",
      tech: ["Python", "OpenAI API", "PyPDF2"],
      link: "#"
    },
    {
      title: "Automated Price Tracker",
      description: "A Python automation script that monitors e-commerce websites for price drops.",
      tech: ["Python", "BeautifulSoup4", "Requests"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-100">
          Featured <span className="text-red-500">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-red-900/20 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(220,38,38,0.1)] group">
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-red-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2 py-1 bg-red-500/10 text-red-300 rounded-md border border-red-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="inline-flex items-center text-sm font-semibold text-red-400 hover:text-red-300 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;