
import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { generateResponse } from "../utils/chatResponseGenerator";
import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import ChatInput from "./chat/ChatInput";
import { ChatMessage } from "../types/chat";

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hello! I'm the AI Web Tools support assistant. How can I help you with Resume Enhancer GPT today?",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = (message: string) => {
    // Add user message to chat
    const userMessage = {
      sender: "user",
      text: message,
      timestamp: new Date(),
    };
    setChatHistory((prev) => [...prev, userMessage]);

    // Show typing indicator
    setIsTyping(true);

    // Generate AI response with slight delay to simulate thinking
    setTimeout(() => {
      const aiResponse = generateResponse(userMessage.text);
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "bot",
          text: aiResponse,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

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
        {isOpen ? <MessageSquare size={20} /> : <MessageSquare size={20} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`absolute bottom-16 right-0 w-80 sm:w-96 transition-all duration-300 transform glass-card border border-white/10 overflow-hidden shadow-lg ${
            isMinimized ? "h-12" : "h-[450px]"
          }`}
        >
          <ChatHeader 
            isMinimized={isMinimized} 
            onMinimize={toggleMinimize} 
            onClose={toggleChat} 
          />

          {!isMinimized && (
            <>
              <ChatMessages 
                chatHistory={chatHistory} 
                isTyping={isTyping} 
              />
              
              <ChatInput onSendMessage={handleSendMessage} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SupportChat;
