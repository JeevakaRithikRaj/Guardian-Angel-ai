'use client';

import { patient } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Mic, Phone, Pill, Stethoscope, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AssistantPage() {
  const patientName = patient.name.split(' ')[0] || patient.name;
  return (
    <>
      <header className="p-6">
        <h1 className="font-headline text-3xl font-bold text-foreground">AI Assistant</h1>
        <p className="text-xl text-muted-foreground">Hello {patientName}, how can I help? 😊</p>
      </header>
      <main className="p-4 space-y-8">
        <div className="text-center">
             <div className="mt-4 flex justify-center">
                 <Button size="icon" className="h-32 w-32 rounded-full bg-primary text-primary-foreground shadow-lg animate-pulse">
                    <Mic className="h-16 w-16" />
                 </Button>
            </div>
            <p className="mt-4 text-muted-foreground text-lg">Tap the button and speak.</p>
        </div>

        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-center mb-4">Or use a quick action:</h2>
            <Card className="hover:bg-secondary/80 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300">
                  <HeartHandshake className="h-7 w-7"/>
                </div>
                <span className="text-lg font-semibold">I feel unwell</span>
              </CardContent>
            </Card>
            <Card className="hover:bg-secondary/80 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
                  <Phone className="h-6 w-6"/>
                </div>
                <span className="text-lg font-semibold">Call my family</span>
              </CardContent>
            </Card>
            <Card className="hover:bg-secondary/80 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300">
                  <Pill className="h-6 w-6"/>
                </div>
                <span className="text-lg font-semibold">Medicine reminder</span>
              </CardContent>
            </Card>
        </div>
      </main>
    </>
  );
}
