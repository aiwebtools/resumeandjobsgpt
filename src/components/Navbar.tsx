import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aiToolLinks = [
    { name: "Resume Enhancer GPT", url: "https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt" },
    { name: "Resume Specialist GPT", url: "https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt" },
    { name: "Job Finder GPT", url: "https://chatgpt.com/g/g-67e1ec8fe9f881918c0b884a43034b9d-job-finder-gpt" },
  ];

  const navLinks = [
    ...aiToolLinks,
    { name: "Disclaimer", url: "#disclaimer" },
    { name: "More AI Tools", url: "https://www.aiwebtools.ai" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cyber-dark/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-3">
                <div className="absolute inset-0 bg-cyber-primary-purple rounded-full opacity-20 animate-pulse-glow"></div>
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
                    <path
                      fill="currentColor"
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm7-4H7v-2h12v2zm0-4H7V7h12v2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-white text-xl">RESUME GPT</span>
                <span className="text-xs text-cyber-primary-purple/80">Presented by AiWebTools.Ai</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center space-x-3">
            {/* AI Tool Golden Buttons */}
            <div className="flex space-x-2 mr-4">
              {aiToolLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="group"
                >
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300 hover:from-yellow-400 hover:via-amber-300 hover:to-yellow-200 text-black border-amber-600 hover:border-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] h-10 w-10 p-0 flex items-center justify-center rounded-md"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white bg-black/70 px-2 py-1 rounded whitespace-nowrap transition-opacity">
                      {link.name}
                    </span>
                  </Button>
                </a>
              ))}
            </div>
            
            {/* Other nav links */}
            {navLinks.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyber-primary-purple"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-dark/95 backdrop-blur-lg border-t border-white/10 animate-slide-up">
          <div className="container mx-auto px-4 py-3">
            {/* Mobile AI Tools Buttons */}
            <div className="flex justify-center space-x-4 py-4">
              {aiToolLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="inline-block"
                >
                  <div className="flex flex-col items-center">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300 hover:from-yellow-400 hover:via-amber-300 hover:to-yellow-200 text-black border-amber-600 hover:border-amber-400 transition-all duration-300 transform hover:scale-105 h-12 w-12 p-0 flex items-center justify-center rounded-md mb-1"
                    >
                      <Sparkles className="h-5 w-5" />
                    </Button>
                    <span className="block text-xs text-center mt-1 text-white w-24 truncate">
                      {link.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Other mobile nav links */}
            {navLinks.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="block text-gray-300 hover:text-white py-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
