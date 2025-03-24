
import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Minimize, Maximize } from "lucide-react";

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ sender: string; text: string; timestamp: Date }>>([
    {
      sender: "bot",
      text: "Hello! I'm the AI Web Tools support assistant. How can I help you with Resume Enhancer GPT today?",
      timestamp: new Date(),
    },
  ]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Simulated responses - in a real implementation, this would connect to OpenAI's API
  const simulatedResponses = [
    "Resume Enhancer GPT helps optimize your resume for specific job applications by analyzing your current resume and suggesting tailored improvements.",
    "Our AI tools use advanced natural language processing to create professional, ATS-friendly resumes that highlight your relevant skills and experiences.",
    "Yes, Resume Enhancer GPT can also create custom cover letters that match your enhanced resume and target specific job positions.",
    "For technical support, you can email us at Contact@ai-webtools.com or call us at (475) 800-8096.",
    "Resume Enhancer GPT is available through our website and can be accessed directly via ChatGPT at https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt.",
    "We have multiple AI tools available at www.aiwebtools.ai to help with various career and productivity needs.",
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    const userMessage = {
      sender: "user",
      text: message,
      timestamp: new Date(),
    };
    setChatHistory([...chatHistory, userMessage]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "bot",
          text: randomResponse,
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  // Scroll to bottom of chat when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center w-14 h-14 rounded-full text-white shadow-neon-glow transition-all ${
          isOpen ? "bg-cyber-primary-purple" : "bg-cyber-neon-blue animate-pulse-glow"
        }`}
        aria-label="Chat Support"
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`absolute bottom-16 right-0 w-80 sm:w-96 transition-all duration-300 transform glass-card border border-white/10 overflow-hidden shadow-lg ${
            isMinimized ? "h-12" : "h-[450px]"
          }`}
        >
          {/* Chat Header */}
          <div className="bg-cyber-primary-purple/20 backdrop-blur-md p-3 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-cyber-primary-purple flex items-center justify-center mr-2">
                <MessageSquare size={12} className="text-white" />
              </div>
              <h3 className="text-white text-sm font-medium">AI Web Tools Support</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleMinimize}
                className="text-white/70 hover:text-white transition-colors"
              >
                {isMinimized ? <Maximize size={14} /> : <Minimize size={14} />}
              </button>
              <button 
                onClick={toggleChat}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat Messages */}
              <div 
                ref={chatContainerRef}
                className="flex-1 p-4 overflow-y-auto h-[350px] scrollbar-none"
              >
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === "user"
                          ? "bg-cyber-primary-purple/30 text-white"
                          : "bg-cyber-dark-purple/60 border border-white/10 text-gray-200"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs opacity-50 mt-1 text-right">
                        {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-3 border-t border-white/10">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-cyber-dark/50 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyber-primary-purple"
                  />
                  <button
                    type="submit"
                    className="bg-cyber-primary-purple text-white p-2 rounded-md hover:bg-cyber-secondary-purple transition-colors"
                    disabled={!message.trim()}
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SupportChat;
