
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  const navLinks = [
    { name: "Resume Enhancer GPT", url: "https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt" },
    { name: "Resume Specialist GPT", url: "https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt" },
    { name: "FAQ", url: "#faq" },
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
                <span className="font-display font-semibold text-white text-xl">Resume Enhancer GPT</span>
                <span className="text-xs text-cyber-primary-purple/80">Presented by AiWebTools.Ai</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
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
            {navLinks.map((link) => (
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
