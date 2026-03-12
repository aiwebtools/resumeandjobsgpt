
import React from "react";
import { ChevronRight, Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Resume Enhancer GPT", url: "https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt" },
    { name: "Resume Specialist GPT", url: "https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt" },
    { name: "Job Finder GPT", url: "https://chatgpt.com/g/g-67e1ec8fe9f881918c0b884a43034b9d-job-finder-gpt" },
    { name: "FAQ", url: "#faq" },
    { name: "Disclaimer", url: "#disclaimer" },
    { name: "More AI Tools", url: "https://aiwebtools.lovable.app/?via=aiwebtools" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", url: "https://openai.com/policies/privacy-policy/" },
    { name: "Terms of Service", url: "https://aiwebtools.lovable.app/disclaimers" },
  ];

  return (
    <footer id="footer" className="pt-16 pb-8 bg-divine-dark border-t border-divine-gold/20 relative overflow-hidden">
      {/* Divine Footer Background */}
      <div className="absolute inset-0 divine-footer-gradient opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-divine-gold/80 to-transparent animate-divine-shimmer"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-divine-platinum/10 rounded-full filter blur-3xl animate-divine-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-12 mr-4">
                <div className="absolute inset-0 bg-divine-gold rounded-full opacity-30 animate-divine-pulse-glow"></div>
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 text-divine-gold">
                    <path
                      fill="currentColor"
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm7-4H7v-2h12v2zm0-4H7V7h12v2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-white text-xl divine-text-glow">RESUME & JOB FINDER AI SUITE</span>
                <span className="text-xs text-divine-gold/80">Presented by AiWebTools.Ai</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
              Advanced AI-powered resume enhancement and job finding tools designed to help you land more interviews by tailoring your resume to specific job opportunities.
            </p>
            <div className="space-y-4">
              <a
                href="tel:4758008096"
                className="flex items-center text-gray-300 hover:text-divine-gold transition-colors duration-300 group"
              >
                <Phone size={16} className="text-divine-gold mr-3 group-hover:animate-bounce" />
                (475) 800-8096
              </a>
              <a
                href="mailto:Contact@ai-webtools.com"
                className="flex items-center text-gray-300 hover:text-divine-gold transition-colors duration-300 group"
              >
                <Mail size={16} className="text-divine-gold mr-3 group-hover:animate-bounce" />
                Contact@ai-webtools.com
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-white font-display font-semibold text-lg mb-8 divine-text-glow">Useful Links</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="flex items-center text-gray-300 hover:text-divine-gold transition-all duration-300 group divine-link-hover"
                  >
                    <ChevronRight size={14} className="text-divine-gold mr-3 transition-transform group-hover:translate-x-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h3 className="text-white font-display font-semibold text-lg mb-8 divine-text-glow">Legal</h3>
            <ul className="space-y-4 mb-10">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="flex items-center text-gray-300 hover:text-divine-gold transition-all duration-300 group divine-link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ChevronRight size={14} className="text-divine-gold mr-3 transition-transform group-hover:translate-x-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              className="divine-secondary-button inline-flex items-center text-sm font-medium"
            >
              More AI Tools
              <ExternalLink size={14} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-divine-gold/20 pt-8">
          <a href="https://www.aiwebtools.ai" className="hover:text-divine-gold transition-colors duration-300 divine-text-subtle-glow">
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
