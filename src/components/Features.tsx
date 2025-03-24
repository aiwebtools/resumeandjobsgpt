
import React from "react";
import { FileText, Search, Edit, Download, FileCheck, FileSpreadsheet } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-cyber-neon-blue" />,
      title: "Resume Transcription",
      description: "Our AI accurately transcribes your complete resume, capturing all details including job history, references, and other critical information.",
    },
    {
      icon: <Search className="h-6 w-6 text-cyber-neon-pink" />,
      title: "Job-Specific Research",
      description: "Web research on your target job and company to gather insights about requirements, culture, and values for tailored enhancements.",
    },
    {
      icon: <Edit className="h-6 w-6 text-cyber-neon-green" />,
      title: "Strategic Enhancement",
      description: "Expertly expand skills, experiences, and achievements that align with job requirements while preserving your original resume's integrity.",
    },
    {
      icon: <FileCheck className="h-6 w-6 text-cyber-neon-yellow" />,
      title: "Complete Rewrite",
      description: "After your approval, we provide a comprehensive rewrite that integrates all enhancements while maintaining your original information.",
    },
    {
      icon: <Download className="h-6 w-6 text-cyber-primary-purple" />,
      title: "Downloadable Documents",
      description: "Get your enhanced resume in a professionally formatted Word document, ready to submit to potential employers.",
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-cyber-neon-blue" />,
      title: "Custom Cover Letter",
      description: "Receive a perfectly aligned cover letter that complements your enhanced resume and highlights your qualifications for the specific role.",
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Advanced <span className="cyber-gradient-text">AI-Powered</span> Features
          </h2>
          <p className="text-gray-300 text-lg">
            Resume Enhancer GPT goes beyond basic editing to transform your resume into a powerful tool for job hunting success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary-purple/20 to-cyber-neon-blue/20 rounded-full filter blur-md group-hover:blur-lg transition-all"></div>
                <div className="w-12 h-12 flex items-center justify-center relative z-10 bg-cyber-dark-purple/60 backdrop-blur-lg rounded-full border border-white/10">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-white group-hover:cyber-gradient-text transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
