
import React from "react";
import { FileText, Edit, Award, Download, CheckSquare, ArrowRight } from "lucide-react";

const ResumeSpecialistSection = () => {
  return (
    <section id="resume-specialist" className="py-24 relative overflow-hidden bg-cyber-dark/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary-purple/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="cyber-gradient-text">Resume Specialist GPT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl">
            Expert guidance on creating professional resumes with optimal formatting and structure
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-6 border border-white/10 rounded-xl hover:border-cyber-primary-purple/30 transition-all duration-300 hover:-translate-y-1">
            <FileText className="h-10 w-10 text-cyber-primary-purple mb-4" />
            <h3 className="text-xl font-display font-semibold mb-3">Professional Formatting</h3>
            <p className="text-gray-300">
              Get expert guidance on creating well-structured resumes with optimal formatting that stands out to employers and passes ATS systems.
            </p>
          </div>
          
          <div className="glass-card p-6 border border-white/10 rounded-xl hover:border-cyber-primary-purple/30 transition-all duration-300 hover:-translate-y-1">
            <Edit className="h-10 w-10 text-cyber-primary-purple mb-4" />
            <h3 className="text-xl font-display font-semibold mb-3">Personalized Content</h3>
            <p className="text-gray-300">
              Create tailored content that highlights your unique skills, experiences, and achievements for your target industry or position.
            </p>
          </div>
          
          <div className="glass-card p-6 border border-white/10 rounded-xl hover:border-cyber-primary-purple/30 transition-all duration-300 hover:-translate-y-1">
            <Award className="h-10 w-10 text-cyber-primary-purple mb-4" />
            <h3 className="text-xl font-display font-semibold mb-3">Industry-Specific Advice</h3>
            <p className="text-gray-300">
              Receive advice on resume best practices specific to your industry, helping you stand out in competitive job markets.
            </p>
          </div>
          
          <div className="glass-card p-6 border border-white/10 rounded-xl hover:border-cyber-primary-purple/30 transition-all duration-300 hover:-translate-y-1">
            <CheckSquare className="h-10 w-10 text-cyber-primary-purple mb-4" />
            <h3 className="text-xl font-display font-semibold mb-3">Iterative Improvements</h3>
            <p className="text-gray-300">
              Get ongoing feedback and suggestions for improving your resume through multiple iterations until it's perfect.
            </p>
          </div>
          
          <div className="glass-card p-6 border border-white/10 rounded-xl hover:border-cyber-primary-purple/30 transition-all duration-300 hover:-translate-y-1">
            <Download className="h-10 w-10 text-cyber-primary-purple mb-4" />
            <h3 className="text-xl font-display font-semibold mb-3">Downloadable Documents</h3>
            <p className="text-gray-300">
              Receive your professionally formatted resume as a downloadable document, ready to share with potential employers.
            </p>
          </div>
          
          <div className="glass-card p-6 border border-white/10 rounded-xl hover:border-cyber-primary-purple/30 transition-all duration-300 hover:-translate-y-1">
            <FileText className="h-10 w-10 text-cyber-primary-purple mb-4" />
            <h3 className="text-xl font-display font-semibold mb-3">Complete Resume Creation</h3>
            <p className="text-gray-300">
              Start from scratch with guided questions about your education, experience, and skills to create a comprehensive resume.
            </p>
          </div>
        </div>
        
        {/* Interactive Demo */}
        <div className="glass-card p-8 border border-white/10 rounded-xl mb-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyber-neon-blue/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyber-primary-purple/10 rounded-full filter blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">How Resume Specialist Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-cyber-primary-purple/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-cyber-primary-purple font-bold">1</span>
                  </div>
                  <p className="text-gray-300">
                    Upload your existing resume or start from scratch with guided questions
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-cyber-primary-purple/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-cyber-primary-purple font-bold">2</span>
                  </div>
                  <p className="text-gray-300">
                    Answer questions about your education, work experience, skills, and career goals
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-cyber-primary-purple/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-cyber-primary-purple font-bold">3</span>
                  </div>
                  <p className="text-gray-300">
                    Review suggested content and formatting options for your resume
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-cyber-primary-purple/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-cyber-primary-purple font-bold">4</span>
                  </div>
                  <p className="text-gray-300">
                    Request specific changes and improvements until your resume is perfect
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-cyber-primary-purple/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-cyber-primary-purple font-bold">5</span>
                  </div>
                  <p className="text-gray-300">
                    Download your professionally formatted resume as a document
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyber-button group inline-flex"
                >
                  <span>Create Your Professional Resume</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            <div>
              <div className="rounded-lg overflow-hidden bg-cyber-dark border border-white/5">
                <div className="p-4 bg-cyber-dark/80 border-b border-white/5 flex items-center">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <div className="text-xs text-gray-400 ml-2">Resume Specialist GPT</div>
                </div>
                <div className="p-6 bg-cyber-dark font-mono text-sm">
                  <div className="mb-4 text-cyan-400">
                    <span className="text-gray-400">Resume Specialist:</span> Let's make an amazing Resume for you! Do you have a resume currently or shall we start from scratch?
                  </div>
                  <div className="mb-4 text-green-400">
                    <span className="text-gray-400">You:</span> I'd like to start from scratch.
                  </div>
                  <div className="mb-4 text-cyan-400">
                    <span className="text-gray-400">Resume Specialist:</span> Great! Let's create a professional resume together. I'll need some information:
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• What's your full name?</li>
                    <li>• What's your target job title or industry?</li>
                    <li>• Tell me about your education</li>
                    <li>• What work experience do you have?</li>
                    <li>• What key skills would you like to highlight?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-6">
            Create a Professional Resume That Gets Results
          </h3>
          <p className="text-gray-300 mb-8">
            Whether you're starting from scratch or improving an existing resume, Resume Specialist GPT provides the guidance you need to create a standout document.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button"
            >
              Try Resume Specialist GPT
            </a>
            <a 
              href="https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border border-cyber-primary-purple text-cyber-primary-purple hover:bg-cyber-primary-purple/10 transition-colors"
            >
              Try Resume Enhancer GPT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSpecialistSection;
