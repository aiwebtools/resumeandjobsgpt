
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { setOpenAIKey, getOpenAIKey } from "@/utils/openAIService";

interface OpenAIKeyInputProps {
  onKeySet: () => void;
}

const OpenAIKeyInput: React.FC<OpenAIKeyInputProps> = ({ onKeySet }) => {
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if we already have a key
    const existingKey = getOpenAIKey();
    if (existingKey) {
      setApiKey(existingKey);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) return;
    
    setIsLoading(true);
    setOpenAIKey(apiKey.trim());
    setIsLoading(false);
    onKeySet();
  };

  return (
    <div className="p-4 bg-cyber-dark/80 border border-white/10 rounded-md mb-4">
      <h3 className="text-white text-sm font-medium mb-2">Set Your OpenAI API Key</h3>
      <p className="text-white/70 text-xs mb-3">
        Your API key allows the chat to provide smart responses about AI Web Tools and Resume Enhancer GPT.
        The key is stored locally in your browser and never sent to our servers.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="sk-..."
          className="flex-1 bg-cyber-dark/50 border border-white/10 text-white"
        />
        <Button 
          type="submit" 
          className="bg-cyber-primary-purple hover:bg-cyber-secondary-purple"
          disabled={isLoading || !apiKey.trim()}
        >
          {isLoading ? "Setting..." : "Set Key"}
        </Button>
      </form>
    </div>
  );
};

export default OpenAIKeyInput;
