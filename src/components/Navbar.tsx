import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "../hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
    { name: "More AI Tools", url: "https://aiwebtools.lovable.app/?via=aiwebtools" },
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
                <span className={`font-display font-semibold text-white ${isMobile ? "text-sm" : "text-xl"} whitespace-nowrap`}>
                  RESUME & JOB FINDER AI SUITE
                </span>
                <span className={`${isMobile ? "text-xs" : "text-xs"} text-cyber-primary-purple/80`}>
                  Presented by AiWebTools.Ai
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center space-x-4">
            {/* AI Tool Golden Buttons */}
            <div className="flex space-x-6 mr-6">
              {aiToolLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <Button 
                    variant="outline" 
                    size="default"
                    className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300 hover:from-yellow-400 hover:via-amber-300 hover:to-yellow-200 text-black border-amber-600 hover:border-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 px-4 py-2 h-10"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span className="font-medium">{link.name}</span>
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
      <div 
        className={`md:hidden bg-cyber-dark/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          {/* Mobile AI Tools Buttons */}
          <div className="flex flex-col space-y-3 py-3">
            {aiToolLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button 
                  variant="outline" 
                  size="default"
                  className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300 hover:from-yellow-400 hover:via-amber-300 hover:to-yellow-200 text-black border-amber-600 hover:border-amber-400 transition-all duration-300 w-full flex items-center justify-center gap-2 text-sm"
                >
                  <Sparkles className="h-4 w-4" />
                  <span className="font-medium">{link.name}</span>
                </Button>
              </a>
            ))}
          </div>
          
          {/* Other mobile nav links */}
          {navLinks.slice(3).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('#') ? '_self' : '_blank'}
              rel={link.url.startsWith('#') ? undefined : 'noopener noreferrer'}
              className="block text-gray-300 hover:text-white py-3 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
