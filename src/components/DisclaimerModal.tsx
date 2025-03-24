
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-dark/80 backdrop-blur-sm">
      <div className="glass-card w-full max-w-md p-6 animate-scale-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-display font-semibold text-white">Disclaimer</h3>
          <button
            onClick={handleAgree}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="text-gray-300 text-sm mb-6 space-y-4">
          <p>
            The Resume Enhancer GPT tool is designed to assist in resume creation and optimization. While we strive to provide valuable assistance, we cannot guarantee employment outcomes or interview results.
          </p>
          <p>
            By using this service, you acknowledge that:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Results may vary based on individual qualifications, job market conditions, and other factors.</li>
            <li>The content generated should be reviewed and verified for accuracy before submission.</li>
            <li>You are responsible for the final content of your resume and cover letter.</li>
            <li>This tool does not replace professional career counseling services.</li>
          </ul>
          <p>
            For full terms and conditions, please refer to our <a href="https://aiwebtools.ai/terms-of-services" className="text-cyber-primary-purple underline">Terms of Service</a>.
          </p>
        </div>
        <button
          onClick={handleAgree}
          className="w-full cyber-button py-2.5"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
