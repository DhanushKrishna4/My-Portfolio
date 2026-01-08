import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "VoiceGuide AI",
    description: "An accessibility tool that uses computer vision and text-to-speech to help visually impaired users navigate complex web interfaces in real-time.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    github: "https://github.com/dhanushkrishna4/VoiceGuide-AI"
  },
  {
    title: "AI-Powered PDF Summarizer",
    description: "A natural language processing application that extracts key insights from lengthy PDF documents, generating concise summaries and actionable bullet points.",
    tags: ["Python", "NLTK", "Flask"],
    github: "https://github.com/dhanushkrishna4/PDF-Summarizer"
  },
  {
    title: "Automated Price Tracker",
    description: "A web scraping bot that monitors e-commerce prices, sends email alerts when targets drop below a threshold, and visualizes price history trends.",
    tags: ["Python", "Selenium", "Pandas"],
    github: "https://github.com/dhanushkrishna4/Price-Tracker"
  },
  {
    title: "Interactive Stock Dashboard",
    description: "A financial analytics dashboard providing real-time stock data visualization, technical indicators, and market sentiment analysis for traders.",
    tags: ["Python", "Streamlit", "Plotly"],
    github: "https://github.com/dhanushkrishna4/Stock-Dashboard"
  },
  {
    title: "URL Shortener API",
    description: "A high-performance REST API for shortening URLs with analytics tracking, custom aliases, and QR code generation.",
    tags: ["Python", "FastAPI", "Redis"],
    github: "https://github.com/dhanushkrishna4/URL-Shortener"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-red-900/50 transition-all group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-slate-300 border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;