
import React from "react";
import { MessageSquare, Minimize, Maximize, X } from "lucide-react";

interface ChatHeaderProps {
  isMinimized: boolean;
  onMinimize: () => void;
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ isMinimized, onMinimize, onClose }) => {
  return (
    <div className="bg-cyber-primary-purple/20 backdrop-blur-md p-3 flex justify-between items-center border-b border-white/10">
      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-cyber-primary-purple flex items-center justify-center mr-2">
          <MessageSquare size={12} className="text-white" />
        </div>
        <h3 className="text-white text-sm font-medium">AI Web Tools Support</h3>
      </div>
      <div className="flex items-center space-x-2">
        <button 
          onClick={onMinimize}
          className="text-white/70 hover:text-white transition-colors"
        >
          {isMinimized ? <Maximize size={14} /> : <Minimize size={14} />}
        </button>
        <button 
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
