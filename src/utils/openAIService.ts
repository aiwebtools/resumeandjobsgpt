
import { OpenAIConfig } from "../types/chat";

// Store the API key in memory (not persistent across refreshes)
let openAIConfig: OpenAIConfig = {
  // Your actual OpenAI API key
  apiKey: "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"
};

export const setOpenAIKey = (apiKey: string) => {
  openAIConfig.apiKey = apiKey;
  // Store in localStorage for persistence
  localStorage.setItem('openai_api_key', apiKey);
  return true;
};

export const getOpenAIKey = (): string | null => {
  return openAIConfig.apiKey;
};

export const hasOpenAIKey = (): boolean => {
  return !!getOpenAIKey();
};

export const generateAIResponse = async (prompt: string): Promise<string> => {
  const apiKey = getOpenAIKey();
  
  if (!apiKey) {
    return "OpenAI API key is not configured correctly.";
  }
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a friendly, bubbly AI support assistant for AI Web Tools LLC. Use emojis and a casual professional tone in your responses about Resume Enhancer GPT. ✨

Keep your responses under 3 sentences whenever possible. Focus only on addressing the specific question with enthusiasm! 🚀

Key points about Resume Enhancer GPT:
- ✅ Analyzes resumes and suggests improvements for specific job applications
- 🔗 Available at https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt
- 📧 For support: Contact@ai-webtools.com or (475) 800-8096
- 💰 Free basic version, premium version for paid subscribers`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error('OpenAI API error:', data.error);
      return "Sorry, there was an error with the AI service. Please try again later.";
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI response:', error);
    return "Sorry, there was an error connecting to the AI service. Please check your internet connection and try again.";
  }
};
