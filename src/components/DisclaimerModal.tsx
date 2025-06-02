
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already agreed to the disclaimer
    const hasAgreed = localStorage.getItem("disclaimerAgreed");
    
    if (!hasAgreed) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("disclaimerAgreed", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-dark/80 backdrop-blur-sm divine-modal-overlay">
      <div className="divine-glass-card w-full max-w-md p-8 animate-divine-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-display font-semibold text-white divine-text-glow">Disclaimer</h3>
          <button
            onClick={handleAgree}
            className="text-gray-400 hover:text-divine-gold transition-colors duration-300"
          >
            <X size={20} />
          </button>
        </div>
        <div className="text-gray-300 text-sm mb-8 space-y-4 leading-relaxed">
          <p>
            The Resume Enhancer GPT tool is designed to assist in resume creation and optimization. While we strive to provide valuable assistance, we cannot guarantee employment outcomes or interview results.
          </p>
          <p>
            By using this service, you acknowledge that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Results may vary based on individual qualifications, job market conditions, and other factors.</li>
            <li>The content generated should be reviewed and verified for accuracy before submission.</li>
            <li>You are responsible for the final content of your resume and cover letter.</li>
            <li>This tool does not replace professional career counseling services.</li>
          </ul>
          <p>
            For full terms and conditions, please refer to our <a href="https://aiwebtools.lovable.app/disclaimers" className="text-divine-gold hover:text-divine-platinum transition-colors duration-300 underline divine-link-glow">Terms of Service</a>.
          </p>
        </div>
        <button
          onClick={handleAgree}
          className="w-full divine-button py-3"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
