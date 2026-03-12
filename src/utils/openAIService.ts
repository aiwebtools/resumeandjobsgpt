
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

Format links as HTML <a> tags so they're clickable (e.g., <a href="https://example.com">Link text</a>). Format emails as <a href="mailto:email@example.com">email@example.com</a> and phone numbers as <a href="tel:+1234567890">phone number</a>.

Key points about Resume Enhancer GPT:
- ✅ Analyzes resumes and suggests improvements for specific job applications
- 🎯 Focuses exclusively on resume optimization with tailored suggestions
- 🔍 Performs detailed resume analysis and provides professional rewrites
- 🔗 Available at <a href="https://chatgpt.com/g/g-SUjFvDzsr-resume-enhancer-gpt">Resume Enhancer GPT</a>

Key points about Resume Specialist GPT:
- 📝 Provides comprehensive resume guidance and formatting advice
- 🧩 Helps structure resumes for different industries and career levels
- 👔 Offers general career advice alongside resume optimization
- 🔗 Available at <a href="https://chatgpt.com/g/g-3RPD1GkR4-resume-specialist-gpt">Resume Specialist GPT</a>

Key points about Job Finder GPT:
- 🔎 Finds job opportunities matching your skills and preferences
- 📊 Analyzes job market trends and provides application strategies
- 📨 Helps prepare for interviews and follow-ups
- 🔗 Available at <a href="https://chatgpt.com/g/g-67e1ec8fe9f881918c0b884a43034b9d-job-finder-gpt">Job Finder GPT</a>

Differences between the tools:
- Resume Enhancer GPT: Specialized in tailoring existing resumes for specific job applications with detailed optimizations
- Resume Specialist GPT: Broader resume creation and formatting expertise with industry-specific guidance
- Job Finder GPT: Focuses on actual job searching, application strategies, and interview preparation

Company background:
AI Web Tools LLC is a tech startup founded in 2021 that specializes in AI-powered career advancement tools. Our mission is to make professional development accessible to everyone through intuitive AI assistants. We have a team of 15 AI specialists and career coaches working to continuously improve our tools based on the latest industry trends and user feedback.

General info:
- 📧 For support: <a href="mailto:Contact@ai-webtools.com">Contact@ai-webtools.com</a> or <a href="tel:+14758008096">(475) 800-8096</a>
- 💰 Free basic versions, premium features for paid subscribers
- 🌐 More tools available at <a href="https://aiwebtools.lovable.app/?via=aiwebtools">www.aiwebtools.ai</a>`
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
