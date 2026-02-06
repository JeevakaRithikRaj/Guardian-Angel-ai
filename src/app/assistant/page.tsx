'use client';

import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';

export default function AssistantPage() {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center p-8 bg-primary/10">
        <h1 className="font-headline text-5xl font-bold text-foreground mb-4">Talk to me</h1>
        <p className="text-2xl text-muted-foreground mb-12">I'm listening. How can I help you today?</p>
        
        <Button 
          size="icon" 
          className="h-64 w-64 rounded-full bg-primary text-primary-foreground shadow-2xl animate-pulse"
        >
          <Mic className="h-32 w-32" />
        </Button>
        <p className="mt-8 text-muted-foreground text-2xl">Press to Talk</p>
    </div>
  );
}
