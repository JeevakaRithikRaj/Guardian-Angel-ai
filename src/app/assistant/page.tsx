'use client';

import { patient } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Mic, Phone, Pill } from 'lucide-react';

export default function AssistantPage() {
  const patientName = patient.name.split(' ')[1] || patient.name;
  return (
    <>
      <header className="p-6">
        <h1 className="font-headline text-3xl font-bold text-foreground">AI Assistant</h1>
        <p className="text-xl text-muted-foreground">Hello {patientName} 😊</p>
      </header>
      <main className="p-4 space-y-8">
        <div className="text-center">
            <p className="text-muted-foreground">The AI companion chatbot interface will appear here.</p>
             <div className="mt-8 flex justify-center">
                 <Button size="icon" className="h-24 w-24 rounded-full bg-primary text-primary-foreground">
                    <Mic className="h-12 w-12" />
                 </Button>
            </div>
            <p className="mt-4 text-muted-foreground">Tap the button and speak.</p>
        </div>

        <div>
            <h2 className="text-lg font-semibold text-center mb-4">Or use a quick action:</h2>
            <div className="grid grid-cols-1 gap-4">
                <Button variant="outline" size="lg" className="h-20 text-lg justify-start">
                    <span className="text-3xl mr-4">🤒</span> I feel unwell
                </Button>
                 <Button variant="outline" size="lg" className="h-20 text-lg justify-start">
                    <Phone className="mr-4"/> Call my family
                </Button>
                 <Button variant="outline" size="lg" className="h-20 text-lg justify-start">
                    <Pill className="mr-4"/> Medicine reminder
                </Button>
            </div>
        </div>
      </main>
    </>
  );
}
