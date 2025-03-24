
import React from "react";
import { Upload, Search, Edit, CheckCircle, Download, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload size={28} className="text-cyber-neon-blue" />,
      title: "Upload Your Resume",
      description: "Share your current resume with our AI, which accurately transcribes all existing information without missing any details.",
    },
    {
      icon: <Search size={28} className="text-cyber-neon-pink" />,
      title: "Specify Target Position",
      description: "Tell us which job and company you're applying to so we can research and tailor enhancements specifically for that opportunity.",
    },
    {
      icon: <Edit size={28} className="text-cyber-neon-green" />,
      title: "Review Suggested Enhancements",
      description: "Our AI analyzes your resume against job requirements and suggests strategic improvements to highlight relevant skills and experiences.",
    },
    {
      icon: <CheckCircle size={28} className="text-cyber-neon-yellow" />,
      title: "Approve Changes",
      description: "Review the suggested enhancements and provide feedback before the AI creates your final enhanced resume.",
    },
    {
      icon: <Download size={28} className="text-cyber-primary-purple" />,
      title: "Download Enhanced Documents",
      description: "Receive your professionally formatted resume and matching cover letter as downloadable Word documents.",
    },
    {
      icon: <FileText size={28} className="text-cyber-neon-blue" />,
      title: "Land More Interviews",
      description: "Submit your optimized resume to potential employers and increase your chances of getting called for interviews.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative bg-cyber-dark-purple/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            How <span className="cyber-gradient-text">Resume Enhancer GPT</span> Works
          </h2>
          <p className="text-gray-300 text-lg">
            Our streamlined process takes your existing resume and transforms it into a powerful tool tailored for your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card relative p-6 flex flex-col transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-cyber-dark rounded-full border border-white/10 flex items-center justify-center text-sm font-medium text-cyber-primary-purple">
                {index + 1}
              </div>
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt"
            className="cyber-button inline-flex items-center"
          >
            Try Resume Enhancer GPT Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
