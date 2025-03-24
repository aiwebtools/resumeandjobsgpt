
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How does Resume Enhancer GPT improve my existing resume?",
      answer:
        "Resume Enhancer GPT analyzes your current resume, researches your target job and company, and enhances your content by highlighting relevant skills and experiences, optimizing keywords, and improving formatting—all while preserving your original information. The result is a professionally tailored resume specifically designed to pass through ATS systems and impress hiring managers.",
    },
    {
      question: "Will Resume Enhancer GPT maintain all the information from my original resume?",
      answer:
        "Yes, absolutely. Resume Enhancer GPT begins by accurately transcribing your complete resume, capturing all details such as job history, references, and other information. When enhancing your resume, the AI ensures that all original information is preserved while strategically expanding relevant sections and improving presentation.",
    },
    {
      question: "How long does the enhancement process take?",
      answer:
        "The process typically takes 15-30 minutes, depending on the length and complexity of your resume and the specific job you're targeting. This includes the initial transcription, job-specific research, enhancement suggestions, and final document preparation after your approval.",
    },
    {
      question: "Can I request revisions to the enhanced resume?",
      answer:
        "Yes, you can review all suggested enhancements before the AI creates the final version. If you want to make changes or have additional requests, you can provide feedback, and the AI will adjust the resume accordingly before finalizing it.",
    },
    {
      question: "What format will my enhanced resume be delivered in?",
      answer:
        "Your enhanced resume will be delivered as a downloadable Word document (.docx) that maintains professional formatting and is ready to submit to employers. This format allows you to make additional edits if needed before submission.",
    },
    {
      question: "Does Resume Enhancer GPT also create cover letters?",
      answer:
        "Yes, after enhancing your resume, Resume Enhancer GPT can create a customized cover letter that complements your resume and is specifically tailored to your target position and company. This cover letter will also be available as a downloadable Word document.",
    },
    {
      question: "Will my enhanced resume work with Applicant Tracking Systems (ATS)?",
      answer:
        "Yes, Resume Enhancer GPT optimizes your resume for ATS compatibility by incorporating relevant keywords from the job description, using appropriate formatting, and structuring content in a way that maximizes your resume's visibility to both automated systems and human recruiters.",
    },
    {
      question: "Is my resume information kept confidential?",
      answer:
        "Yes, we take privacy seriously. Your resume information is used solely for the purpose of enhancement and is not shared with third parties. Our systems comply with standard data protection regulations to ensure your personal information remains secure.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-cyber-dark-purple/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Frequently Asked <span className="cyber-gradient-text">Questions</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Find answers to common questions about Resume Enhancer GPT.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card mb-4 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-white pr-8">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-cyber-primary-purple transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "pb-6 max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
