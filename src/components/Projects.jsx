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
    // CHANGE 3: Background set to pure black
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-100">
          Featured <span className="text-red-700">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // CHANGE 3: Swapped bg-slate-900/50 for bg-neutral-900/40 and used deeper red shadow
            <div key={index} className="bg-neutral-900/40 p-6 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(153,27,27,0.2)] group">
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-red-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag, i) => (
                  // CHANGE 3: Updated tags to deep red theme
                  <span key={i} className="text-xs font-medium px-2 py-1 bg-red-950/30 text-red-200 rounded-md border border-red-900/40">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-400 transition-colors">
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