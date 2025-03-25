
import React from "react";
import { ChevronRight, Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Resume Enhancer GPT", url: "https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt" },
    { name: "Resume Specialist GPT", url: "https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt" },
    { name: "Job Finder GPT", url: "https://chatgpt.com/g/g-67e1ec8fe9f881918c0b884a43034b9d-job-finder-gpt" },
    { name: "FAQ", url: "#faq" },
    { name: "Disclaimer", url: "#disclaimer" },
    { name: "More AI Tools", url: "https://www.aiwebtools.ai" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", url: "https://openai.com/policies/privacy-policy/" },
    { name: "Terms of Service", url: "https://aiwebtools.ai/terms-of-services" },
  ];

  return (
    <footer id="footer" className="pt-10 pb-6 bg-cyber-dark border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary-purple/50 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
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
                <span className="font-display font-semibold text-white text-xl">RESUME & JOB FINDER AI SUITE</span>
                <span className="text-xs text-cyber-primary-purple/80">Presented by AiWebTools.Ai</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Advanced AI-powered resume enhancement and job finding tools designed to help you land more interviews by tailoring your resume to specific job opportunities.
            </p>
            <div className="space-y-3">
              <a
                href="tel:4758008096"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-cyber-primary-purple mr-2" />
                (475) 800-8096
              </a>
              <a
                href="mailto:Contact@ai-webtools.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-cyber-primary-purple mr-2" />
                Contact@ai-webtools.com
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                  >
                    <ChevronRight size={14} className="text-cyber-primary-purple mr-2 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ChevronRight size={14} className="text-cyber-primary-purple mr-2 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://www.aiwebtools.ai"
              className="px-5 py-2.5 rounded-full bg-cyber-primary-purple bg-opacity-10 border border-cyber-primary-purple/30 text-cyber-primary-purple hover:bg-opacity-20 transition-colors inline-flex items-center text-sm font-medium"
            >
              More AI Tools
              <ExternalLink size={14} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-white/5 pt-6">
          <a href="https://www.aiwebtools.ai" className="hover:text-white transition-colors">
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
