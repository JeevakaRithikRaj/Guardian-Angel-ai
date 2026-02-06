'use server';
/**
 * @fileOverview Summarizes health data for caregivers, providing key trends and anomalies.
 *
 * - summarizeHealthData - A function that summarizes health data for caregivers.
 * - SummarizeHealthDataInput - The input type for the summarizeHealthData function.
 * - SummarizeHealthDataOutput - The return type for the summarizeHealthData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeHealthDataInputSchema = z.object({
  healthData: z
    .string()
    .describe(
      'A string containing the elderly person’s health data, including heart rate, movement, falls, and inactivity.'
    ),
  anomalies: z
    .string()
    .describe(
      'A string containing any anomalies detected in the elderly person’s health data.'
    ),
});
export type SummarizeHealthDataInput = z.infer<typeof SummarizeHealthDataInputSchema>;

const SummarizeHealthDataOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A summarized report of the elderly person’s health data, including key trends and anomalies.'
    ),
});
export type SummarizeHealthDataOutput = z.infer<typeof SummarizeHealthDataOutputSchema>;

export async function summarizeHealthData(
  input: SummarizeHealthDataInput
): Promise<SummarizeHealthDataOutput> {
  return summarizeHealthDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeHealthDataPrompt',
  input: {schema: SummarizeHealthDataInputSchema},
  output: {schema: SummarizeHealthDataOutputSchema},
  prompt: `You are an AI assistant that summarizes health data for caregivers.

  You will receive health data and anomalies detected in the elderly person’s health data.

  You will provide a summarized report of the elderly person’s health data, including key trends and anomalies, so that caregivers can quickly understand their overall health status and any potential issues.

  Health Data: {{{healthData}}}
  Anomalies: {{{anomalies}}}
  `,
});

const summarizeHealthDataFlow = ai.defineFlow(
  {
    name: 'summarizeHealthDataFlow',
    inputSchema: SummarizeHealthDataInputSchema,
    outputSchema: SummarizeHealthDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
