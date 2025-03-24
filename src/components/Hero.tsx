
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
                AI-Powered Resume Enhancement
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Transform Your <span className="cyber-gradient-text">Resume</span> Into an
              <span className="cyber-gradient-text"> Interview Magnet</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Our AI analyzes your resume, tailors it to specific job opportunities, and enhances it with targeted skills and achievements to maximize your chances of landing interviews.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
              <a
                href="https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt"
                className="cyber-button group"
              >
                <span className="relative z-10">Try Resume Enhancer GPT</span>
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                Learn How It Works
              </a>
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {["Job-Specific Tailoring", "AI-Powered Enhancements", "Professional Formatting", "Cover Letter Creation"].map((feature) => (
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
                      <div className="ml-4 text-xs text-gray-400">Resume Enhancer GPT</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-full bg-cyber-primary-purple flex items-center justify-center text-white font-bold flex-shrink-0">
                          AI
                        </div>
                        <div className="bg-cyber-card-bg rounded-lg p-3 text-sm text-left">
                          <p>I'll help you enhance your resume for the specific job you're targeting. What position are you applying for?</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start justify-end">
                        <div className="bg-cyber-primary-purple/20 border border-cyber-primary-purple/30 rounded-lg p-3 text-sm text-left">
                          <p>I'm applying for a Senior Product Manager position at Tesla.</p>
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
                          <p>Great! I'll research Tesla's Product Manager requirements and tailor your resume accordingly. Let me analyze your current resume...</p>
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
