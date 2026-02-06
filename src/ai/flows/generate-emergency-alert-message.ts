// This file is machine-generated - edit at your own risk.
'use server';
/**
 * @fileOverview A flow to generate emergency alert messages for caregivers.
 *
 * - generateEmergencyAlertMessage - A function that generates an emergency alert message.
 * - GenerateEmergencyAlertMessageInput - The input type for the generateEmergencyAlertMessage function.
 * - GenerateEmergencyAlertMessageOutput - The return type for the generateEmergencyAlertMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEmergencyAlertMessageInputSchema = z.object({
  emergencyType: z
    .string()
    .describe('The type of emergency detected (e.g., fall, inactivity, abnormal vitals).'),
  patientName: z.string().describe('The name of the patient experiencing the emergency.'),
  patientId: z.string().describe('The ID of the patient experiencing the emergency.'),
  timestamp: z.string().describe('The timestamp of when the emergency occurred.'),
  details: z.string().optional().describe('Additional details about the emergency, if available.'),
});
export type GenerateEmergencyAlertMessageInput = z.infer<
  typeof GenerateEmergencyAlertMessageInputSchema
>;

const GenerateEmergencyAlertMessageOutputSchema = z.object({
  alertMessage: z
    .string()
    .describe('A clear and concise emergency alert message for caregivers.'),
});
export type GenerateEmergencyAlertMessageOutput = z.infer<
  typeof GenerateEmergencyAlertMessageOutputSchema
>;

export async function generateEmergencyAlertMessage(
  input: GenerateEmergencyAlertMessageInput
): Promise<GenerateEmergencyAlertMessageOutput> {
  return generateEmergencyAlertMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEmergencyAlertMessagePrompt',
  input: {schema: GenerateEmergencyAlertMessageInputSchema},
  output: {schema: GenerateEmergencyAlertMessageOutputSchema},
  prompt: `You are an AI assistant that generates emergency alert messages for caregivers.

  Based on the following information, create a clear and concise emergency alert message:

  Emergency Type: {{{emergencyType}}}
  Patient Name: {{{patientName}}}
  Patient ID: {{{patientId}}}
  Timestamp: {{{timestamp}}}
  Details: {{{details}}}

  The alert message should be informative and actionable, enabling caregivers to quickly understand the situation and take appropriate action.`,
});

const generateEmergencyAlertMessageFlow = ai.defineFlow(
  {
    name: 'generateEmergencyAlertMessageFlow',
    inputSchema: GenerateEmergencyAlertMessageInputSchema,
    outputSchema: GenerateEmergencyAlertMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
