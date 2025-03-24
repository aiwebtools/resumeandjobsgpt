
import { knowledgeBase } from './chatKnowledgeBase';

export const generateResponse = (userMessage: string): string => {
  const normalizedMessage = userMessage.toLowerCase();
  let response = "";

  // Check if the message contains certain keywords and generate appropriate responses
  if (normalizedMessage.includes("resume") && (normalizedMessage.includes("enhance") || normalizedMessage.includes("improvement") || normalizedMessage.includes("optimize"))) {
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
  else if (normalizedMessage.includes("hello") || normalizedMessage.includes("hi") || normalizedMessage.includes("hey")) {
    response = "Hello! I'm the AI Web Tools support assistant. How can I help you with Resume Enhancer GPT today?";
  }
  else if (normalizedMessage.includes("thank")) {
    response = "You're welcome! Is there anything else I can help you with regarding our AI Web Tools?";
  }
  else if (normalizedMessage.includes("cost") || normalizedMessage.includes("price") || normalizedMessage.includes("subscription") || normalizedMessage.includes("pay")) {
    response = "Resume Enhancer GPT is available through ChatGPT. You would need a ChatGPT subscription to access all of our advanced AI tools. Visit https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt for more details.";
  }
  else if (normalizedMessage.includes("download") || normalizedMessage.includes("format") || normalizedMessage.includes("file") || normalizedMessage.includes("word")) {
    response = "Your enhanced resume and cover letter will be available for download in a professionally formatted Word document, ready to submit to potential employers.";
  }
  else if (normalizedMessage.includes("cover letter") || normalizedMessage.includes("letter")) {
    response = "Resume Enhancer GPT also creates a customized cover letter that complements your enhanced resume and is specifically tailored to your target position and company.";
  }
  else {
    // Default responses for messages that don't match specific patterns
    const defaultResponses = [
      "Resume Enhancer GPT helps optimize your resume for specific job applications by analyzing your current resume and suggesting tailored improvements.",
      "Our AI tools use advanced natural language processing to create professional, ATS-friendly resumes that highlight your relevant skills and experiences.",
      "For more specific information about our Resume Enhancer GPT, please visit https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt or contact us at Contact@ai-webtools.com.",
      "We have multiple AI tools available at www.aiwebtools.ai to help with various career and productivity needs.",
      "Is there anything specific about resume enhancement or our other AI tools that you'd like to know more about?"
    ];
    response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }

  return response;
};
