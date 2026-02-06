import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-health-data-for-caregivers.ts';
import '@/ai/flows/generate-activity-suggestions.ts';
import '@/ai/flows/generate-emergency-alert-message.ts';