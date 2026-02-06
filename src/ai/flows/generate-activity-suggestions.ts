'use server';

/**
 * @fileOverview AI-powered activity suggestion flow for elderly users, providing personalized recommendations based on interests and capabilities.
 *
 * - generateActivitySuggestions - A function that takes user interests and physical capabilities as input and returns a list of activity suggestions.
 * - GenerateActivitySuggestionsInput - The input type for the generateActivitySuggestions function.
 * - GenerateActivitySuggestionsOutput - The return type for the generateActivitySuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateActivitySuggestionsInputSchema = z.object({
  interests: z.string().describe('A comma-separated list of the user\'s interests.'),
  physicalCapabilities: z.string().describe('A description of the user\'s physical capabilities and limitations.'),
});
export type GenerateActivitySuggestionsInput = z.infer<typeof GenerateActivitySuggestionsInputSchema>;

const GenerateActivitySuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of activity suggestions tailored to the user\'s interests and physical capabilities.'),
});
export type GenerateActivitySuggestionsOutput = z.infer<typeof GenerateActivitySuggestionsOutputSchema>;

export async function generateActivitySuggestions(input: GenerateActivitySuggestionsInput): Promise<GenerateActivitySuggestionsOutput> {
  return generateActivitySuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateActivitySuggestionsPrompt',
  input: {schema: GenerateActivitySuggestionsInputSchema},
  output: {schema: GenerateActivitySuggestionsOutputSchema},
  prompt: `You are an AI assistant designed to provide activity suggestions for elderly users.

  Based on the user's interests and physical capabilities, suggest activities that would be engaging and suitable.

  Interests: {{{interests}}}
  Physical Capabilities: {{{physicalCapabilities}}}

  Please provide a list of activity suggestions that are safe, enjoyable, and help to maintain mental and physical well-being.
  Format the suggestions as a numbered list, with each suggestion being a concise and actionable item.
  Consider both individual and social activities. Be creative and make sure the activities match the users interests.
  Don't mention anything about the AI or the user's input in your reponse. Only write the numbered list.
  `,
});

const generateActivitySuggestionsFlow = ai.defineFlow(
  {
    name: 'generateActivitySuggestionsFlow',
    inputSchema: GenerateActivitySuggestionsInputSchema,
    outputSchema: GenerateActivitySuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
