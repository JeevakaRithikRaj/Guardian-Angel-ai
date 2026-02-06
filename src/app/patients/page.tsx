import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { patient } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

export default function PatientsPage() {
  const patientAvatar = PlaceHolderImages.find(p => p.id === patient.avatarId);

  return (
    <>
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-8">
        <h1 className="font-headline text-xl font-semibold">Patients</h1>
        <div className="ml-auto">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Patient
          </Button>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
               <Avatar className="h-16 w-16">
                {patientAvatar && (
                    <AvatarImage src={patientAvatar.imageUrl} alt={patient.name} data-ai-hint={patientAvatar.imageHint} />
                )}
                <AvatarFallback>
                    {patient.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
            </Avatar>
              <div>
                <CardTitle className="font-headline">{patient.name}</CardTitle>
                <CardDescription>{patient.age} years old</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Status</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Normal</Badge>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Last alert</span>
                        <span>2 days ago</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4">View Dashboard</Button>
                </div>
            </CardContent>
          </Card>
           <Card className="flex flex-col items-center justify-center border-2 border-dashed bg-transparent">
             <CardContent className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <PlusCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Add a new patient</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                    Expand your care circle.
                </p>
                <Button variant="outline" className="mt-4">
                    Add Patient
                </Button>
             </CardContent>
           </Card>
        </div>
      </main>
    </>
  );
}
