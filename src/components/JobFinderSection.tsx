
import React from "react";
import { Search, FileText, PenTool, CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const JobFinderSection = () => {
  return (
    <section id="job-finder" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary-purple/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="cyber-gradient-text">Job Finder GPT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl">
            Your personal AI job search assistant that finds real-time job listings tailored to your skills and preferences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="glass-card p-6 border border-white/10 rounded-xl relative overflow-hidden">
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyber-neon-blue/10 rounded-full filter blur-3xl"></div>
              
              <h3 className="text-2xl font-display font-bold mb-6">How Job Finder GPT Works</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-cyber-primary-purple/10 flex items-center justify-center mr-4">
                    <Search className="h-6 w-6 text-cyber-primary-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Personalized Job Search</h4>
                    <p className="text-gray-300">Provides tailored job matches based on your location, job type, salary preferences, and skills</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-cyber-primary-purple/10 flex items-center justify-center mr-4">
                    <FileText className="h-6 w-6 text-cyber-primary-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Resume Tailoring</h4>
                    <p className="text-gray-300">Helps adjust your resume for specific job applications to maximize your chances</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-cyber-primary-purple/10 flex items-center justify-center mr-4">
                    <PenTool className="h-6 w-6 text-cyber-primary-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Custom Cover Letters</h4>
                    <p className="text-gray-300">Creates personalized cover letters for each job application</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-cyber-primary-purple/10 flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-cyber-primary-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Interview Preparation</h4>
                    <p className="text-gray-300">Offers mock interview practice with job-specific questions and coaching</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-cyber-primary-purple/10 flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-cyber-primary-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Application Tracking</h4>
                    <p className="text-gray-300">Helps you organize and track your job applications and interviews</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://chatgpt.com/g/g-67e1ec8fe9f881918c0b884a43034b9d-job-finder-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyber-button group w-full justify-center"
                >
                  <span>Start Your Job Search Today</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="glass-card p-6 border border-white/10">
              <div className="rounded-lg overflow-hidden bg-cyber-dark border border-white/5">
                <div className="p-4 bg-cyber-dark/80 border-b border-white/5 flex items-center">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <div className="text-xs text-gray-400 ml-2">Job Finder GPT</div>
                </div>
                <div className="p-6 bg-cyber-dark font-mono text-sm">
                  <div className="mb-4 text-cyan-400">
                    <span className="text-gray-400">Job Finder GPT:</span> Let's find you a job! First, I need to know:
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li>• What is your zip code?</li>
                    <li>• What job title or type of work are you looking for?</li>
                    <li>• What's your expected salary range?</li>
                    <li>• Are you looking for remote work or specific locations?</li>
                    <li>• What type of employment: full-time, part-time, contract?</li>
                  </ul>
                  <div className="mt-4 text-cyan-400">
                    <span className="text-gray-400">Job Finder GPT:</span> I'll search the web for the most current job listings based on your answers...
                  </div>
                  <div className="mt-4 p-4 bg-gray-800/30 rounded-md border border-white/5">
                    <div className="font-semibold text-green-400 mb-2">✅ Job Match #1:</div>
                    <div className="text-xs space-y-1 text-gray-300">
                      <p>📌 Title: Senior Software Engineer</p>
                      <p>🏢 Company: Tech Innovations Inc.</p>
                      <p>🌐 Location: Remote (US-based)</p>
                      <p>💰 Salary Range: $120,000 - $150,000</p>
                      <p>📄 Summary: 5+ years experience with React, Node.js...</p>
                      <p className="text-blue-400">🔗 Apply Here: [https://...]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-6">
            Ready to Find Your Dream Job?
          </h3>
          <p className="text-gray-300 mb-8">
            Job Finder GPT scans multiple job platforms including Indeed, LinkedIn, ZipRecruiter, Monster, and more to find the perfect opportunities for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chatgpt.com/g/g-67e1ec8fe9f881918c0b884a43034b9d-job-finder-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button"
            >
              Try Job Finder GPT
            </a>
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border border-cyber-primary-purple text-cyber-primary-purple hover:bg-cyber-primary-purple/10 transition-colors"
            >
              Explore More AI Tools
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobFinderSection;
