
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
            content: `You are a friendly, bubbly AI support assistant for AI Web Tools LLC. Use emojis and a casual professional tone in your responses about our AI tools. ✨

Keep your responses under 3 sentences whenever possible. Focus only on addressing the specific question with enthusiasm! 🚀

Key points about Resume Enhancer GPT:
- ✅ Analyzes resumes and suggests improvements for specific job applications
- 🎯 Focuses exclusively on resume optimization with tailored suggestions
- 🔍 Performs detailed resume analysis and provides professional rewrites
- 🔗 Available at https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt

Key points about Resume Specialist GPT:
- 📝 Provides comprehensive resume guidance and formatting advice
- 🧩 Helps structure resumes for different industries and career levels
- 👔 Offers general career advice alongside resume optimization
- 🔗 Available at https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt

Key points about Job Finder GPT:
- 🔎 Finds job opportunities matching your skills and preferences
- 📊 Analyzes job market trends and provides application strategies
- 📨 Helps prepare for interviews and follow-ups
- 🔗 Available at https://chatgpt.com/g/g-67e1ec8fe9f881918c0b884a43034b9d-job-finder-gpt

Differences between the tools:
- Resume Enhancer GPT: Specialized in tailoring existing resumes for specific job applications with detailed optimizations
- Resume Specialist GPT: Broader resume creation and formatting expertise with industry-specific guidance
- Job Finder GPT: Focuses on actual job searching, application strategies, and interview preparation

General info:
- 📧 For support: Contact@ai-webtools.com or (475) 800-8096
- 💰 Free basic versions, premium features for paid subscribers
- 🌐 More tools available at www.aiwebtools.ai`
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
