'use server';

import {
  summarizeHealthData,
  type SummarizeHealthDataInput,
} from '@/ai/flows/summarize-health-data-for-caregivers';
import {
  generateActivitySuggestions,
  type GenerateActivitySuggestionsInput,
} from '@/ai/flows/generate-activity-suggestions';
import {
  generateEmergencyAlertMessage,
  type GenerateEmergencyAlertMessageInput,
} from '@/ai/flows/generate-emergency-alert-message';

export async function getHealthSummary(input: SummarizeHealthDataInput) {
  try {
    const { summary } = await summarizeHealthData(input);
    return { success: true, summary };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to generate health summary.' };
  }
}

export async function getActivitySuggestions(input: GenerateActivitySuggestionsInput) {
  try {
    const { suggestions } = await generateActivitySuggestions(input);
    return { success: true, suggestions };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to generate activity suggestions.' };
  }
}

export async function getEmergencyAlert(input: GenerateEmergencyAlertMessageInput) {
  try {
    const { alertMessage } = await generateEmergencyAlertMessage(input);
    return { success: true, alertMessage };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to generate emergency alert.' };
  }
}
