'use client';

import { useState, useTransition } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Siren, ShieldAlert, LoaderCircle } from 'lucide-react';
import { getEmergencyAlert } from '@/app/actions';
import type { Patient } from '@/lib/types';

export function AlertsCard({ patient }: { patient: Patient }) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleSimulateFall = () => {
    startTransition(async () => {
      const result = await getEmergencyAlert({
        emergencyType: 'Fall Detected',
        patientName: patient.name,
        patientId: patient.id,
        timestamp: new Date().toISOString(),
        details: 'A sudden, sharp movement followed by a period of no activity was detected in the living room.',
      });

      if (result.success) {
        setAlertMessage(result.alertMessage);
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
    <div>
      {alertMessage ? (
        <Alert variant="destructive">
          <Siren className="h-5 w-5" />
          <AlertTitle className="font-headline text-lg">Emergency Alert!</AlertTitle>
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      ) : (
        <Alert>
          <ShieldAlert className="h-5 w-5" />
          <AlertTitle className="font-headline">All Systems Normal</AlertTitle>
          <AlertDescription>
            No active alerts. All vital signs and activity levels are within normal range.
            <Button
              size="sm"
              variant="destructive"
              className="ml-4"
              onClick={handleSimulateFall}
              disabled={isPending}
            >
              {isPending ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <Siren className="mr-2 h-4 w-4" />
              )}
              Simulate Fall
            </Button>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
