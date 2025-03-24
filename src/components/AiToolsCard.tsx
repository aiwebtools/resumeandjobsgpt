
import React from "react";
import { ExternalLink } from "lucide-react";

const AiToolsCard = () => {
  const tools = [
    {
      name: "Resume Enhancer GPT",
      url: "https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt",
      description: "Enhance your resume for specific job applications",
    },
    {
      name: "Resume Specialist GPT",
      url: "https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt",
      description: "Get expert guidance on resume optimization",
    },
    {
      name: "More AI Tools",
      url: "https://www.aiwebtools.ai",
      description: "Explore our full suite of AI productivity tools",
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto glass-card p-8 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyber-neon-blue/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyber-primary-purple/10 rounded-full filter blur-3xl"></div>
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Explore Our <span className="cyber-gradient-text">AI Tools</span> Collection
            </h2>
            <p className="text-gray-300">
              Discover our suite of specialized AI tools designed to boost your productivity and career success
            </p>
          </div>
          
          <div className="relative mb-12">
            <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 hover:border-cyber-primary-purple/50 transition-all duration-300">
              <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="block relative group">
                <img 
                  src="https://ideogram.ai/assets/image/lossless/response/UOsVI9YCSae7Y_Xhvw3gjQ" 
                  alt="AI Web Tools Collection" 
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 via-cyber-dark/30 to-transparent group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <div className="font-display text-xl font-semibold text-white mb-2">AI Web Tools Collection</div>
                    <p className="text-gray-300 text-sm mb-4">Powerful AI tools to enhance your productivity and career</p>
                    <span className="inline-flex items-center text-cyber-primary-purple text-sm">
                      Visit aiwebtools.ai
                      <ExternalLink size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 border border-white/10 hover:border-cyber-primary-purple/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:cyber-gradient-text transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{tool.description}</p>
                <div className="flex items-center text-sm text-cyber-primary-purple">
                  Try it now
                  <ExternalLink size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiToolsCard;
