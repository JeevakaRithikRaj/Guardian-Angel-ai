import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bell, Pill, Droplet, Footprints } from 'lucide-react';
import type { Reminder } from '@/lib/types';

function getIcon(medication: string) {
  const lowerMed = medication.toLowerCase();
  if (lowerMed.includes('water')) return <Droplet className="h-5 w-5 text-blue-400" />;
  if (lowerMed.includes('walk')) return <Footprints className="h-5 w-5 text-green-400" />;
  return <Pill className="h-5 w-5 text-red-400" />;
}

export function RemindersCard({ reminders }: { reminders: Reminder[] }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6 text-primary" />
          <CardTitle className="font-headline">Daily Reminders</CardTitle>
        </div>
        <CardDescription>Medication and activity schedule for today</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px]">
          <div className="space-y-4 pr-4">
            {reminders.map((reminder) => (
              <div key={reminder.id} className="flex items-center gap-4">
                <div className="flex-shrink-0">{getIcon(reminder.medication)}</div>
                <div className="flex-grow">
                  <p className="font-semibold">{reminder.medication}</p>
                  <p className="text-sm text-muted-foreground">{reminder.dosage}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{reminder.time}</p>
                  <div className="flex items-center justify-end gap-2 mt-1">
                    <label htmlFor={`reminder-${reminder.id}`} className="text-sm text-muted-foreground">
                      {reminder.taken ? 'Taken' : 'Pending'}
                    </label>
                    <Checkbox id={`reminder-${reminder.id}`} checked={reminder.taken} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
