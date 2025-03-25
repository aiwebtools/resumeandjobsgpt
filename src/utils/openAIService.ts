
import { OpenAIConfig } from "../types/chat";

// Store the API key in memory (not persistent across refreshes)
let openAIConfig: OpenAIConfig = {
  apiKey: null
};

export const setOpenAIKey = (apiKey: string) => {
  openAIConfig.apiKey = apiKey;
  // Store in localStorage for persistence
  localStorage.setItem('openai_api_key', apiKey);
  return true;
};

export const getOpenAIKey = (): string | null => {
  // If no key in memory, try to get from localStorage
  if (!openAIConfig.apiKey) {
    const storedKey = localStorage.getItem('openai_api_key');
    if (storedKey) {
      openAIConfig.apiKey = storedKey;
    }
  }
  return openAIConfig.apiKey;
};

export const hasOpenAIKey = (): boolean => {
  return !!getOpenAIKey();
};

export const generateAIResponse = async (prompt: string): Promise<string> => {
  const apiKey = getOpenAIKey();
  
  if (!apiKey) {
    return "Please set your OpenAI API key to enable AI responses.";
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
            content: `You are an AI support assistant for AI Web Tools LLC, a company that specializes in AI-powered tools for professional development and career advancement.
            
Your main task is to provide information about Resume Enhancer GPT, a tool that helps optimize resumes for job applications.

Key information about Resume Enhancer GPT:
- It helps analyze current resumes and suggests tailored improvements for specific job applications
- It performs web research on target positions and companies to gather insights
- It expands skills and experiences that align with job requirements
- After user approval, it provides a comprehensive rewrite
- It creates a perfectly aligned cover letter for the specific role
- Available at https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt
- For support, email Contact@ai-webtools.com or call (475) 800-8096
- Basic version available for free, premium version for paid subscribers
- Has great reviews from users who have successfully landed job interviews

Your company also offers other tools:
- Resume Specialist GPT: Available at https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt
- Job Finder GPT: Available at https://chatgpt.com/g/g-67e1ec8fe9f881918c0b884a43034b9d-job-finder-gpt
- More AI tools are available at www.aiwebtools.ai

Be helpful, informative, and always aim to assist the user with their queries about Resume Enhancer GPT or other AI Web Tools services.`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500
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
