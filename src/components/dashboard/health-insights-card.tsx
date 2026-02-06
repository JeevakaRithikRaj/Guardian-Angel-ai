import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, FileText } from 'lucide-react';
import type { Vitals } from '@/lib/types';
import { getHealthSummary } from '@/app/actions';

function formatHealthDataForAI(vitals: Vitals): string {
  const latestHeartRate = vitals.heartRate[vitals.heartRate.length - 1]?.value;
  const latestBP = vitals.bloodPressure[vitals.bloodPressure.length - 1];
  const totalSteps = vitals.steps[0]?.value;
  const sleepHours = vitals.sleep[0]?.value;

  return `
- Heart Rate: Current is ${latestHeartRate} bpm. Data available for the last 24 hours.
- Blood Pressure: Last reading was ${latestBP?.systolic}/${latestBP?.diastolic}.
- Activity: Total steps today are ${totalSteps}.
- Sleep: Slept for ${sleepHours} hours last night.
  `.trim();
}

export async function HealthInsightsCard({ vitals }: { vitals: Vitals }) {
  const healthData = formatHealthDataForAI(vitals);
  // In a real app, anomalies would be detected by a separate system.
  // For this prototype, we'll provide a static example.
  const anomalies = "Slightly elevated heart rate noted around 4 PM.";
  
  const result = await getHealthSummary({ healthData, anomalies });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <CardTitle className="font-headline">AI Health Insights</CardTitle>
        </div>
        <CardDescription>AI-generated summary of recent health data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {result.success ? (
          <div className="prose prose-sm dark:prose-invert max-w-none text-foreground/90">
            <p>{result.summary}</p>
          </div>
        ) : (
          <div className="text-destructive flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <p>{result.error}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
