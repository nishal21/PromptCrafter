
import { GoogleGenAI } from "@google/genai";
import { PromptType, Tone, ExpertiseLevel } from "../types";

export async function craftPrompt(
  apiKey: string,
  idea: string,
  tool: string,
  promptType: PromptType,
  tone: Tone,
  expertise: ExpertiseLevel,
  language: string,
  negativePrompt: string,
  context: string
): Promise<string> {
  if (!apiKey) {
    throw new Error("API Key is missing. Please provide your Gemini API key to continue.");
  }
  
  const ai = new GoogleGenAI({ apiKey });

  const metaPrompt = `
    You are PromptCrafter AI, a world-class prompt engineering expert. Your task is to convert a user's idea into a high-quality, effective prompt for a specified AI tool, based on a detailed set of requirements.

    **1. CORE REQUEST**
    - **User's Idea:** "${idea}"
    - **Target AI Tool:** ${tool || 'A generic AI model (like ChatGPT, Gemini, or Claude)'}

    **2. OUTPUT SPECIFICATIONS**
    - **Desired Format:** "${promptType}"
    - **Desired Tone:** "${tone}"
    - **Target Expertise Level:** "${expertise}". Adapt the vocabulary, structure, and complexity of the *generated prompt* to this level.
        - 'Beginner': Use simple, direct language. Assume no prior knowledge. Explain steps clearly.
        - 'Intermediate': Use standard terminology. Assume the user has some domain knowledge. Prompts can be more concise.
        - 'Expert': Use advanced, precise, and technical language. Assume the user is a professional. Focus on efficiency and sophisticated techniques.
    ${language ? `- **Output Language:** The final prompt MUST be written entirely in ${language}. All instructions to the target AI must be in ${language}.` : ''}

    **3. CONTENT CONSTRAINTS**
    ${negativePrompt ? `- **Negative Prompt (Exclusions):** The generated prompt must explicitly instruct the AI to AVOID the following topics, themes, or elements: "${negativePrompt}"` : ''}
    ${context ? `- **Additional Context & Examples:** Use this crucial information to make the prompt more specific and aligned with the user's vision.
      Context: "${context}"` : ''}

    **4. YOUR TASK (Instructions for PromptCrafter AI)**
    1.  **Synthesize All Inputs:** Carefully analyze all the information provided above.
    2.  **Generate the Prompt/Workflow:**
        *   **Role & Goal:** Always start the prompt by assigning a clear, expert role to the AI (e.g., "You are a master storyteller," "You are a senior full-stack developer specializing in React"). Then, state the primary goal of the prompt.
        *   **Context:** Seamlessly integrate the user's idea and any "Additional Context" to ground the AI.
        *   **Task & Instructions:** Provide a clear, numbered, or bulleted list of instructions for the AI to follow. These instructions should be unambiguous and actionable.
        *   **Constraints & Exclusions:** If a "Negative Prompt" was provided, create a section titled "IMPORTANT CONSTRAINTS" or "WHAT TO AVOID" and list the exclusions.
        *   **Incorporate All Specifications:** The entire generated prompt must embody the requested "Tone", "Expertise Level", and "Language".
        *   **Tool-Specific Syntax:** If a specific tool like Midjourney or DALL-E is mentioned, incorporate relevant syntax (e.g., aspect ratios, style parameters, weighting). For code, ask for clean, commented, and efficient solutions.
        *   **Workflow Generation:** If "Multi-Step Workflow" is requested, structure the output with a clear "Overall Goal:", followed by "Step 1: [Name of Step]", "Step 2: [Name of Step]", etc., each with its own tailored prompt.
    3.  **Final Output:** Your response must be ONLY the generated prompt or workflow. Format it professionally using Markdown for excellent readability (headings, bold text, lists). Do not include any of your own conversational text, greetings, or preambles.
    `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: metaPrompt,
      config: {
        temperature: 0.75,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate prompt: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while communicating with the AI.");
  }
}