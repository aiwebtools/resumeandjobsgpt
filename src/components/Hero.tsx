
import React from "react";
import { ArrowRight, Zap, FileText, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40"></div>
      <div className="absolute top-60 right-1/4 w-72 h-72 bg-cyber-primary-purple/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyber-neon-blue/20 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block px-3 py-1 rounded-full bg-cyber-primary-purple/10 border border-cyber-primary-purple/30 text-cyber-primary-purple text-sm font-medium mb-5">
              <span className="flex items-center gap-1">
                <Zap size={14} className="text-cyber-neon-yellow" />
                Complete Career Advancement AI Suite
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              #1 AI Web Tools for <span className="cyber-gradient-text">Career Success</span> - 
              <span className="cyber-gradient-text"> Resume Enhancer GPT</span> & More
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              AIWEBTOOLS.AI presents the most advanced AI tools suite for professionals. Our Resume Enhancer GPT, Resume Specialist GPT, and Job Finder GPT help you optimize resumes, create tailored cover letters, and find perfect job opportunities with cutting-edge artificial intelligence technology.
            </p>

            {/* Three AI Tool Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {/* Resume Enhancer Button */}
              <a
                href="https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-lg p-[1px] shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                aria-label="Try Resume Enhancer GPT - AI-powered resume optimization tool"
              >
                <div className="h-full w-full px-4 py-3 rounded-lg bg-cyber-dark/90 backdrop-blur-sm flex flex-col items-center justify-center transition-all">
                  <span className="font-bold mb-1">Try Resume Enhancer GPT</span>
                  <span className="text-xs text-cyan-300 flex items-center gap-1">
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    <span>NOW</span>
                  </span>
                </div>
              </a>
              
              {/* Resume Specialist Button */}
              <a
                href="https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg p-[1px] shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(217,70,239,0.5)]"
                aria-label="Try Resume Specialist GPT - AI resume creation and optimization"
              >
                <div className="h-full w-full px-4 py-3 rounded-lg bg-cyber-dark/90 backdrop-blur-sm flex flex-col items-center justify-center transition-all">
                  <span className="font-bold mb-1">Try Resume Specialist GPT</span>
                  <span className="text-xs text-pink-300 flex items-center gap-1">
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    <span>NOW</span>
                  </span>
                </div>
              </a>
              
              {/* Job Finder Button */}
              <a
                href="https://chatgpt.com/g/g-67e1ec8fe9f881918c0b884a43034b9d-job-finder-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-white rounded-lg p-[1px] shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                aria-label="Try Job Finder GPT - AI-powered job search and discovery tool"
              >
                <div className="h-full w-full px-4 py-3 rounded-lg bg-cyber-dark/90 backdrop-blur-sm flex flex-col items-center justify-center transition-all">
                  <span className="font-bold mb-1">Try Job Finder GPT</span>
                  <span className="text-xs text-emerald-300 flex items-center gap-1">
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    <span>NOW</span>
                  </span>
                </div>
              </a>
            </div>

            {/* SEO-Optimized Features Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {["AI Resume Enhancement", "AI Resume Creation", "AI Job Finding", "AI Cover Letters", "AI Interview Prep"].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyber-dark border border-white/10 text-sm text-gray-300"
                >
                  <CheckCircle size={14} className="text-cyber-neon-green" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-none mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary-purple/20 to-cyber-neon-blue/20 rounded-xl blur-xl"></div>
              <div className="relative glass-card p-5 animate-float">
                <div className="relative z-10 rounded-lg overflow-hidden border border-white/10">
                  <div className="bg-cyber-dark-purple p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="ml-4 text-xs text-gray-400">Resume & Job Finder AI Suite</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-full bg-cyber-primary-purple flex items-center justify-center text-white font-bold flex-shrink-0">
                          AI
                        </div>
                        <div className="bg-cyber-card-bg rounded-lg p-3 text-sm text-left">
                          <p>Which of our AI tools would you like to use today? We have Resume Enhancer, Resume Specialist, and Job Finder to help advance your career.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start justify-end">
                        <div className="bg-cyber-primary-purple/20 border border-cyber-primary-purple/30 rounded-lg p-3 text-sm text-left">
                          <p>I'm looking for a new job in the tech industry. Can you help me find opportunities?</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold flex-shrink-0">
                          U
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-full bg-cyber-primary-purple flex items-center justify-center text-white font-bold flex-shrink-0">
                          AI
                        </div>
                        <div className="bg-cyber-card-bg rounded-lg p-3 text-sm text-left">
                          <p>I'll help you find tech jobs with our Job Finder GPT. Let me also optimize your resume with Resume Enhancer GPT to increase your chances!</p>
                        </div>
                      </div>

                      <div className="pl-11 flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyber-primary-purple rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-cyber-primary-purple rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-cyber-primary-purple rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-cyber-neon-blue/20 rounded-full blur-xl"></div>
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-cyber-primary-purple/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
