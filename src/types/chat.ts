
export type ChatMessage = {
  sender: string;
  text: string;
  timestamp: Date;
};

export type OpenAIConfig = {
  apiKey: string | null;
};
