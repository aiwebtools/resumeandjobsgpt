
import React from "react";
import { FileText, Search, Edit, Download, FileCheck, FileSpreadsheet, BriefcaseBusiness, MessagesSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-cyber-neon-blue" />,
      title: "Resume Enhancement",
      description: "Our AI accurately tailors your resume for specific job applications, highlighting relevant skills and experiences to maximize your chances of getting interviews.",
    },
    {
      icon: <Edit className="h-6 w-6 text-cyber-neon-pink" />,
      title: "Resume Creation",
      description: "Build a professional resume from scratch with industry-specific formatting and content guidance from our Resume Specialist GPT.",
    },
    {
      icon: <Search className="h-6 w-6 text-cyber-neon-green" />,
      title: "Job Discovery",
      description: "Our Job Finder GPT searches multiple job platforms to find opportunities matching your preferences, location, and salary expectations.",
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-cyber-neon-yellow" />,
      title: "Cover Letter Creation",
      description: "Generate tailored cover letters that complement your resume and highlight your qualifications for specific roles and companies.",
    },
    {
      icon: <MessagesSquare className="h-6 w-6 text-cyber-primary-purple" />,
      title: "Interview Preparation",
      description: "Practice with AI-powered mock interviews featuring job-specific questions and receive feedback to improve your performance.",
    },
    {
      icon: <BriefcaseBusiness className="h-6 w-6 text-cyber-neon-blue" />,
      title: "Application Tracking",
      description: "Keep track of your job applications, interviews, and follow-ups to stay organized throughout your job search process.",
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Complete <span className="cyber-gradient-text">AI-Powered</span> Career Tools
          </h2>
          <p className="text-gray-300 text-lg">
            Our comprehensive suite of AI tools helps you at every stage of your job search journey - from creating resumes to finding and landing your dream job.
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
