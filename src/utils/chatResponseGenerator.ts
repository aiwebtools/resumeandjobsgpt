
import { knowledgeBase } from './chatKnowledgeBase';

export const generateResponse = (userMessage: string): string => {
  const normalizedMessage = userMessage.toLowerCase();
  let response = "";

  // Check if the message contains certain keywords and generate appropriate responses
  if (normalizedMessage.includes("suite") || normalizedMessage.includes("ai suite") || normalizedMessage.includes("resume & job finder") || normalizedMessage.includes("resume and job finder")) {
    response = knowledgeBase["suite"][Math.floor(Math.random() * knowledgeBase["suite"].length)];
  }
  else if (normalizedMessage.includes("resume") && (normalizedMessage.includes("enhance") || normalizedMessage.includes("improvement") || normalizedMessage.includes("optimize"))) {
    response = knowledgeBase["resume enhancer"][Math.floor(Math.random() * knowledgeBase["resume enhancer"].length)];
  } 
  else if (normalizedMessage.includes("feature") || normalizedMessage.includes("what can") || normalizedMessage.includes("capabilities") || normalizedMessage.includes("do for me")) {
    response = knowledgeBase["features"][Math.floor(Math.random() * knowledgeBase["features"].length)];
  }
  else if (normalizedMessage.includes("process") || normalizedMessage.includes("how it works") || normalizedMessage.includes("steps") || normalizedMessage.includes("how do i")) {
    response = knowledgeBase["process"][Math.floor(Math.random() * knowledgeBase["process"].length)];
  }
  else if (normalizedMessage.includes("tool") || normalizedMessage.includes("gpt") || normalizedMessage.includes("ai tools") || normalizedMessage.includes("other tools")) {
    response = knowledgeBase["tools"][Math.floor(Math.random() * knowledgeBase["tools"].length)];
  }
  else if (normalizedMessage.includes("contact") || normalizedMessage.includes("support") || normalizedMessage.includes("help") || normalizedMessage.includes("phone") || normalizedMessage.includes("email")) {
    response = knowledgeBase["contact"][Math.floor(Math.random() * knowledgeBase["contact"].length)];
  }
  else if (normalizedMessage.includes("legal") || normalizedMessage.includes("disclaimer") || normalizedMessage.includes("terms") || normalizedMessage.includes("privacy") || normalizedMessage.includes("liability")) {
    response = knowledgeBase["legal"][Math.floor(Math.random() * knowledgeBase["legal"].length)];
  }
  else if (normalizedMessage.includes("company") || normalizedMessage.includes("about") || normalizedMessage.includes("who are you") || normalizedMessage.includes("background")) {
    response = knowledgeBase["company"][Math.floor(Math.random() * knowledgeBase["company"].length)];
  }
  else if (normalizedMessage.includes("hello") || normalizedMessage.includes("hi") || normalizedMessage.includes("hey")) {
    response = "Hello! I'm the AI Web Tools support assistant. How can I help you with our Resume & Job Finder AI Suite today? 😊";
  }
  else if (normalizedMessage.includes("thank")) {
    response = "You're welcome! Is there anything else I can help you with regarding our Resume & Job Finder AI Suite? ✨";
  }
  else if (normalizedMessage.includes("cost") || normalizedMessage.includes("price") || normalizedMessage.includes("subscription") || normalizedMessage.includes("pay")) {
    response = "Our AI tools are available through ChatGPT. You would need a ChatGPT subscription to access all of our advanced AI tools in the Resume & Job Finder AI Suite. Visit <a href='https://www.aiwebtools.ai'>www.aiwebtools.ai</a> for more details. 💰";
  }
  else if (normalizedMessage.includes("download") || normalizedMessage.includes("format") || normalizedMessage.includes("file") || normalizedMessage.includes("word")) {
    response = "Our AI tools can provide downloadable documents in professionally formatted Word format, ready to submit to potential employers. 📄";
  }
  else if (normalizedMessage.includes("cover letter") || normalizedMessage.includes("letter")) {
    response = "Both Resume Enhancer GPT and Job Finder GPT can create customized cover letters that complement your resume and are specifically tailored to your target position and company. ✉️";
  }
  else if (normalizedMessage.includes("job finder") || normalizedMessage.includes("find job")) {
    response = "Job Finder GPT helps you discover real-time job opportunities that match your skills and preferences. Learn more at <a href='#job-finder'>Job Finder GPT</a> section or try it directly at <a href='https://chatgpt.com/g/g-67e1ec8fe9f881918c0b884a43034b9d-job-finder-gpt'>Job Finder GPT</a>. 🔍";
  }
  else if (normalizedMessage.includes("difference") || normalizedMessage.includes("compare") || normalizedMessage.includes("vs") || normalizedMessage.includes("versus")) {
    response = knowledgeBase["differences"][Math.floor(Math.random() * knowledgeBase["differences"].length)];
  }
  else if (normalizedMessage.includes("specialist") || normalizedMessage.includes("resume specialist")) {
    response = "Resume Specialist GPT provides comprehensive guidance on creating professional resumes. Learn more at <a href='#resume-specialist'>Resume Specialist GPT</a> section or try it directly at <a href='https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt'>Resume Specialist GPT</a>. 📝";
  }
  else {
    // Default responses for messages that don't match specific patterns
    const defaultResponses = [
      "The Resume & Job Finder AI Suite helps optimize your resume and find jobs! Check out Resume Enhancer GPT at <a href='https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt'>Resume Enhancer GPT</a> ✨",
      "Our AI tools use advanced natural language processing to create professional, ATS-friendly resumes that highlight your relevant skills and experiences! 🚀",
      "For more specific information about our tools in the Resume & Job Finder AI Suite, please visit <a href='https://www.aiwebtools.ai'>www.aiwebtools.ai</a> or contact us at <a href='mailto:Contact@ai-webtools.com'>Contact@ai-webtools.com</a>. 📧",
      "We have multiple AI tools available in our suite to help with various career and productivity needs! Check the <a href='#job-finder'>Job Finder GPT</a> and <a href='#resume-specialist'>Resume Specialist GPT</a> sections for more information. 🌟",
      "Is there anything specific about our Resume & Job Finder AI Suite that you'd like to know more about? I'm here to help! 😊"
    ];
    response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }

  return response;
};
