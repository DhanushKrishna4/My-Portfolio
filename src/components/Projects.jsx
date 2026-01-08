import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "VoiceGuide AI",
      desc: "A multilingual AI-powered travel itinerary planner with voice recognition. Creates personalized travel plans in seconds.",
      tech: ["Python", "Streamlit", "Azure OpenAI", "Azure Cognitive Services"],
      link: "https://github.com/DhanushKrishna4/VoiceGuideAI"
    },
    {
      title: "AI-Powered PDF Summarizer",
      desc: "An intelligent document processing tool that reads PDF files and generates concise summaries using GPT-3.5.",
      tech: ["Python", "Streamlit", "OpenAI API", "PyPDF2"],
      link: "https://github.com/DhanushKrishna4/AI-Summarizer"
    },
    {
      title: "Automated Price Tracker",
      desc: "A Python automation script that monitors e-commerce websites for price drops using stealth scraping techniques.",
      tech: ["Python", "BeautifulSoup4", "Requests", "Schedule"],
      link: "https://github.com/DhanushKrishna4/Price-Tracker"
    },
    {
      title: "Interactive Stock Dashboard",
      desc: "A real-time financial data visualization tool that fetches live market data and renders interactive, zoomable charts.",
      tech: ["Python", "Streamlit", "Plotly", "yfinance"],
      link: "https://github.com/DhanushKrishna4/Stock-Dashboard"
    },
    {
      title: "URL Shortener API",
      desc: "A lightning-fast URL shortening service that generates short links and tracks click analytics in real-time.",
      tech: ["Python", "FastAPI", "SQLite"],
      link: "https://github.com/DhanushKrishna4/URL-Shortener"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white border-l-4 border-blue-500 pl-4">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 text-sm flex-grow leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-slate-900 text-slate-300 text-xs px-2 py-1 rounded border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-white hover:text-blue-400 font-medium transition-colors"
              >
                <Github size={18} />
                <span>View Source Code</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;