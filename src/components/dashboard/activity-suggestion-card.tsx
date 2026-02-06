'use client';

import { useState, useTransition } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Bot, Wand2, LoaderCircle } from 'lucide-react';
import { getActivitySuggestions } from '@/app/actions';
import type { Patient } from '@/lib/types';

export function ActivitySuggestionCard({ patient }: { patient: Patient }) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleGenerateSuggestions = () => {
    startTransition(async () => {
      setSuggestions([]); // Clear previous suggestions
      const result = await getActivitySuggestions({
        interests: patient.interests,
        physicalCapabilities: patient.physicalCapabilities,
      });

      if (result.success && result.suggestions) {
        setSuggestions(result.suggestions);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error,
        });
      }
    });
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <CardTitle className="font-headline">AI Companion</CardTitle>
        </div>
        <CardDescription>Generate engaging activity suggestions</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full" onClick={handleGenerateSuggestions} disabled={isPending}>
          {isPending ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          Generate Suggestions
        </Button>
        {suggestions.length > 0 && (
          <div className="mt-4 space-y-2 text-sm">
            <h4 className="font-semibold">Here are some ideas:</h4>
            <ul className="list-disc list-inside text-muted-foreground">
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
