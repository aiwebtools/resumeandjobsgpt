
import React, { useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { ChatMessage } from "../../types/chat";

interface ChatMessagesProps {
  chatHistory: ChatMessage[];
  isTyping: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ chatHistory, isTyping }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isTyping]);

  // Parse links in messages to make them clickable
  const renderMessageText = (text: string) => {
    return {
      __html: text
        // Style links to be blue with underline on hover
        .replace(/<a /g, '<a style="color: #33C3F0; text-decoration: none; transition: all 0.2s;" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" ')
        // Make sure all links open in a new tab
        .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ')
    };
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[80%] rounded-lg px-4 py-2 ${
              message.sender === "user"
                ? "bg-cyber-primary-purple text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            <div
              dangerouslySetInnerHTML={renderMessageText(message.text)}
              className="text-sm"
            />
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-gray-700 rounded-lg px-4 py-2 text-white max-w-[80%]">
            <div className="flex items-center space-x-2">
              <MessageCircle size={14} />
              <span className="text-sm">Typing</span>
              <span className="typing-animation">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
