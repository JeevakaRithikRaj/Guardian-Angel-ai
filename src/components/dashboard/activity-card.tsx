import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Footprints, BedDouble } from 'lucide-react';
import type { Vitals } from '@/lib/types';
import { Progress } from '@/components/ui/progress';

export function ActivityCard({ vitals }: { vitals: Vitals }) {
  const steps = vitals.steps[0]?.value || 0;
  const sleep = vitals.sleep[0]?.value || 0;
  const stepGoal = 3000;
  const sleepGoal = 8;
  const stepProgress = Math.min((steps / stepGoal) * 100, 100);
  const sleepProgress = Math.min((sleep / sleepGoal) * 100, 100);

  return (
    <div className="grid grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Footprints className="h-6 w-6 text-primary" />
            <CardTitle className="font-headline">Daily Steps</CardTitle>
          </div>
           <CardDescription>Steps taken today vs. daily goal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-2">
            <p className="text-4xl font-bold tracking-tight">{steps.toLocaleString()}</p>
            <p className="text-muted-foreground">/ {stepGoal.toLocaleString()} steps</p>
          </div>
          <Progress value={stepProgress} className="mt-4" />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BedDouble className="h-6 w-6 text-primary" />
            <CardTitle className="font-headline">Sleep Duration</CardTitle>
          </div>
          <CardDescription>Last night's sleep vs. goal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-2">
            <p className="text-4xl font-bold tracking-tight">{sleep.toFixed(1)}</p>
            <p className="text-muted-foreground">/ {sleepGoal} hours</p>
          </div>
          <Progress value={sleepProgress} className="mt-4" />
        </CardContent>
      </Card>
    </div>
  );
}
