
import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Resume Enhancer GPT transformed my generic resume into a targeted document that landed me three interviews in one week. The tailored approach really made a difference!",
      author: "Jessica M.",
      role: "Software Developer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      quote: "After months of job hunting with no results, Resume Enhancer GPT helped me rewrite my resume for a specific position. I got called for an interview the very next day!",
      author: "Michael T.",
      role: "Marketing Manager",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "What impressed me most was how the AI kept all my original information but presented it in a way that resonated with recruiters. The cover letter was excellent too!",
      author: "Sarah K.",
      role: "Project Manager",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      quote: "The job-specific research made all the difference. My resume now speaks directly to what my target company is looking for. Worth every penny!",
      author: "David R.",
      role: "Financial Analyst",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/91.jpg",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-cyber-dark-purple/20 to-transparent"></div>
      <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-cyber-dark-purple/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Success <span className="cyber-gradient-text">Stories</span>
          </h2>
          <p className="text-gray-300 text-lg">
            See how Resume Enhancer GPT has helped job seekers land their dream positions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-cyber-neon-yellow text-cyber-neon-yellow" />
                ))}
              </div>
              <p className="text-gray-200 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border border-cyber-primary-purple/30"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-cyber-primary-purple">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="text-2xl font-display font-semibold mb-4 cyber-gradient-text">Ready to transform your job search?</div>
            <p className="text-gray-300 mb-6">Join thousands of successful job seekers who have boosted their careers with our AI-powered resume enhancement.</p>
            <a
              href="https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt"
              className="cyber-button inline-flex items-center"
            >
              Enhance Your Resume Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
