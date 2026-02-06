'use client';

import { useState } from 'react';
import Image from 'next/image';
import { reminders } from '@/lib/data';
import type { Reminder } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from '@/components/ui/alert-dialog';
import { CheckCircle2 } from 'lucide-react';

export default function MedicinePage() {
  const [selectedReminder, setSelectedReminder] = useState<Reminder | null>(null);
  const [takenReminders, setTakenReminders] = useState<Set<string>>(
    new Set(reminders.filter(r => r.taken).map(r => r.id))
  );

  const handleOpenDialog = (reminder: Reminder) => {
    setSelectedReminder(reminder);
  };

  const handleCloseDialog = () => {
    setSelectedReminder(null);
  };

  const handleTakeMedication = () => {
    if (selectedReminder) {
      setTakenReminders(prev => new Set(prev).add(selectedReminder.id));
      handleCloseDialog();
    }
  };
  
  const getPillImage = (reminder: Reminder) => {
    return PlaceHolderImages.find(p => p.id === reminder.imageId);
  }

  return (
    <>
      <header className="p-6">
        <h1 className="font-headline text-5xl font-bold text-foreground">My Medicine</h1>
        <p className="text-2xl text-muted-foreground mt-1">Today's schedule</p>
      </header>
      <main className="p-4 space-y-6">
        {reminders.filter(r => !r.medication.toLowerCase().includes('walk') && !r.medication.toLowerCase().includes('water')).map((reminder) => {
          const isTaken = takenReminders.has(reminder.id);
          const pillImage = getPillImage(reminder);
          return (
            <Card 
              key={reminder.id} 
              onClick={() => !isTaken && handleOpenDialog(reminder)}
              className={`transition-all ${isTaken ? 'bg-secondary/50' : 'hover:bg-secondary/80 cursor-pointer'}`}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {pillImage && (
                    <Image src={pillImage.imageUrl} alt={reminder.medication} width={64} height={64} className="rounded-full border-4 border-white" data-ai-hint={pillImage.imageHint}/>
                  )}
                  <div>
                    <p className="text-2xl font-bold">{reminder.medication}</p>
                    <p className="text-lg text-muted-foreground">{reminder.time}</p>
                  </div>
                </div>
                {isTaken && (
                  <div className="text-green-600 flex items-center gap-2">
                    <CheckCircle2 className="h-10 w-10" />
                    <span className="font-bold text-lg">Taken</span>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </main>

      {selectedReminder && (
        <AlertDialog open onOpenChange={handleCloseDialog}>
          <AlertDialogContent className="p-0 border-0 max-w-lg w-full rounded-2xl overflow-hidden">
            <div className="bg-background p-8 text-center">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-4xl font-bold mb-4">Time for your medicine</AlertDialogTitle>
                <AlertDialogDescription className="text-xl text-muted-foreground">Please take your {selectedReminder.medication}.</AlertDialogDescription>
              </AlertDialogHeader>
              <div className="my-8 flex justify-center">
                <Image
                  src={getPillImage(selectedReminder)?.imageUrl ?? ''}
                  alt={selectedReminder.medication}
                  width={200}
                  height={200}
                  className="rounded-full shadow-lg border-8 border-white"
                  data-ai-hint={getPillImage(selectedReminder)?.imageHint}
                />
              </div>
              <AlertDialogFooter>
                <AlertDialogAction onClick={handleTakeMedication} className="w-full h-24 text-3xl font-bold bg-green-500 hover:bg-green-600 text-white">
                  I've taken it
                </AlertDialogAction>
              </AlertDialogFooter>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
