import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ GEMINI_API_KEY is not set');
  throw new Error('GEMINI_API_KEY environment variable is required');
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: apiKey, // Explicitly pass the API key
    })
  ],
  model: 'googleai/gemini-1.5-flash-latest',
});
