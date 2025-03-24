
import React, { useEffect, useRef } from "react";

type ChatMessage = {
  sender: string;
  text: string;
  timestamp: Date;
};

interface ChatMessagesProps {
  chatHistory: ChatMessage[];
  isTyping: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ chatHistory, isTyping }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, isTyping]);

  return (
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
      {isTyping && (
        <div className="mb-3 flex justify-start">
          <div className="max-w-[80%] rounded-lg p-3 bg-cyber-dark-purple/60 border border-white/10 text-gray-200">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-cyber-primary-purple/70 animate-bounce" style={{ animationDelay: "0ms" }}></div>
              <div className="w-2 h-2 rounded-full bg-cyber-primary-purple/70 animate-bounce" style={{ animationDelay: "150ms" }}></div>
              <div className="w-2 h-2 rounded-full bg-cyber-primary-purple/70 animate-bounce" style={{ animationDelay: "300ms" }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
