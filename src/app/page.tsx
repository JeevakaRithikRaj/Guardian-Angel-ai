import { patient } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Stethoscope, Pill, ClipboardList, FileText, HeartPulse, Droplet, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

function PatientProfileCard() {
  const patientAvatar = PlaceHolderImages.find(p => p.id === patient.avatarId);
  return (
    <Card className="bg-primary/10 border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20 border-2 border-primary">
            {patientAvatar ? (
              <AvatarImage src={patientAvatar.imageUrl} alt={patient.name} data-ai-hint={patientAvatar.imageHint} />
            ) : (
              <AvatarFallback className="text-3xl">{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold font-headline text-foreground">{patient.name}</h2>
            <p className="text-muted-foreground">
              {patient.age} years old, {patient.gender}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="font-semibold text-muted-foreground">Condition:</span>
          <span className="font-medium text-foreground">{patient.condition}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-muted-foreground">Blood Group:</span>
          <span className="font-medium text-foreground">{patient.bloodGroup}</span>
        </div>
        <Separator />
        <div className="flex justify-between items-center">
            <div>
                 <span className="font-semibold text-muted-foreground">Emergency:</span>
                <p className="font-medium text-foreground">{patient.emergencyContact.relation} - {patient.emergencyContact.phone}</p>
            </div>
          <Button size="icon" className="h-12 w-12 rounded-full bg-red-500 hover:bg-red-600 text-white">
            <Phone className="h-6 w-6" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function DoctorsCard() {
    return (
        <Card className="h-full">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Stethoscope className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-xl">Doctors</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                 <p className="text-muted-foreground text-sm">Next: Dr. Smith at 4:00 PM</p>
                <Button variant="outline" className="w-full">
                    <Phone className="mr-2" /> Emergency Call
                </Button>
            </CardContent>
        </Card>
    );
}

function MedicineCard() {
    return (
        <Card className="h-full">
            <CardHeader>
                 <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Pill className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-xl">Medicine</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                <p className="font-semibold">Today's Schedule:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                    <li>Lisinopril - 8 AM (Taken)</li>
                    <li>Metformin - 8 PM (Pending)</li>
                </ul>
            </CardContent>
        </Card>
    );
}

function TestsCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ClipboardList className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-xl">Tests</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
                <p className="font-semibold">Recent Vitals:</p>
                <div className="flex justify-around text-center">
                    <div>
                        <HeartPulse className="h-8 w-8 mx-auto text-red-500" />
                        <p className="font-bold text-lg">82</p>
                        <p className="text-muted-foreground">BPM</p>
                    </div>
                    <div>
                        <svg className="h-8 w-8 mx-auto text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 12l-4-2"></path><path d="M12 12V6"></path></svg>
                        <p className="font-bold text-lg">130/85</p>
                        <p className="text-muted-foreground">BP</p>
                    </div>
                    <div>
                        <Droplet className="h-8 w-8 mx-auto text-green-500" />
                        <p className="font-bold text-lg">140</p>
                        <p className="text-muted-foreground">Sugar</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}


function PrescriptionsCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <FileText className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-xl">Prescriptions</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground">2 new uploads from Dr. Smith.</p>
                <p className="font-semibold">Notes:</p>
                <p className="text-muted-foreground italic">"Continue medication for 2 more weeks."</p>
                 <Button variant="outline" className="w-full mt-2">View Files</Button>
            </CardContent>
        </Card>
    );
}


export default function HomePage() {
  return (
    <>
      <header className="p-6 pb-2">
        <h1 className="font-headline text-3xl font-bold text-foreground">Your Health</h1>
      </header>
      <main className="space-y-6 p-4">
        <PatientProfileCard />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <DoctorsCard />
          <MedicineCard />
          <TestsCard />
          <PrescriptionsCard />
        </div>
      </main>
    </>
  );
}
