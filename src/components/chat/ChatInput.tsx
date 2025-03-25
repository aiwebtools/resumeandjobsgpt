
import React, { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isProcessing }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isProcessing) return;
    
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="p-2 border-t border-white/10">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything! ✨"
          className="flex-1 bg-cyber-dark/50 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyber-primary-purple"
          disabled={isProcessing}
        />
        <button
          type="submit"
          className="bg-cyber-primary-purple text-white p-2 rounded-md hover:bg-cyber-secondary-purple transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          disabled={!message.trim() || isProcessing}
        >
          <Send size={16} />
        </button>
      </form>
      <small className="text-xs text-gray-400 mt-1 block">For best results, ask specific questions! 🚀</small>
    </div>
  );
};

export default ChatInput;
