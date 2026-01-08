import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "VoiceGuide AI",
    description: "A multilingual AI-powered travel itinerary planner with voice recognition. Creates personalized travel plans in seconds.",
    tech: ["Python", "Streamlit", "Azure OpenAI", "Azure Cognitive Services"],
    github: "https://github.com/DhanushKrishna4/VoiceGuideAI",
    live: "#"
  },
  {
    title: "AI-Powered PDF Summarizer",
    description: "An intelligent document processing tool that reads PDF files and generates concise summaries using GPT-3.5.",
    tech: ["Python", "Streamlit", "OpenAI API", "PyPDF2"],
    github: "https://github.com/DhanushKrishna4/AI-Summarizer",
    live: "#"
  },
  {
    title: "Automated Price Tracker",
    description: "A Python automation script that monitors e-commerce websites for price drops using stealth scraping techniques.",
    tech: ["Python", "BeautifulSoup4", "Requests", "Schedule"],
    github: "https://github.com/DhanushKrishna4/Price-Tracker",
    live: "#"
  },
  {
    title: "Interactive Stock Dashboard",
    description: "A real-time financial data visualization tool that fetches live market data and renders interactive, zoomable charts.",
    tech: ["Python", "Streamlit", "Plotly", "yfinance"],
    github: "https://github.com/DhanushKrishna4/Stock-Dashboard",
    live: "#"
  },
  {
    title: "URL Shortener API",
    description: "A lightning-fast URL shortening service that generates short links and tracks click analytics in real-time.",
    tech: ["Python", "FastAPI", "SQLite"],
    github: "https://github.com/DhanushKrishna4/URL-Shortener",
    live: "#"
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            /* WRAPPER DIV: Handles the Float Up Animation ONLY */
            <div 
              key={index}
              className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* INNER CARD DIV: Handles the Styling and the Zoom Effect */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-900/50 transition-all duration-300 hover:scale-105 p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-red-500 bg-red-500/10 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Github size={20} />
                    <span className="text-sm">View Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;