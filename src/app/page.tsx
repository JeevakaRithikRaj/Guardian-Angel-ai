import { patient } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Stethoscope, Pill, ClipboardList, FileText, HeartPulse, Droplet, Phone, Gauge } from 'lucide-react';

function PatientProfileCard() {
  const patientAvatar = PlaceHolderImages.find(p => p.id === patient.avatarId);
  return (
    <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 overflow-hidden">
      <CardHeader className="flex flex-row items-start gap-4">
        <Avatar className="h-24 w-24 border-4 border-white shadow-md">
          {patientAvatar ? (
            <AvatarImage src={patientAvatar.imageUrl} alt={patient.name} data-ai-hint={patientAvatar.imageHint} />
          ) : (
            <AvatarFallback className="text-4xl">{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          )}
        </Avatar>
        <div className="flex-1">
          <h2 className="text-3xl font-bold font-headline text-foreground">{patient.name}</h2>
          <p className="text-muted-foreground">
            {patient.age} years old, {patient.gender}
          </p>
           <p className="text-sm font-medium text-foreground/80 mt-1">{patient.condition}</p>
        </div>
         <Button size="icon" className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg flex-shrink-0">
            <Phone className="h-7 w-7" />
          </Button>
      </CardHeader>
      <CardContent className="text-sm pt-2">
        <div className="flex justify-between items-center rounded-lg bg-background/50 p-3">
            <div>
                 <span className="font-semibold text-muted-foreground">Emergency Contact:</span>
                <p className="font-bold text-foreground text-base">{patient.emergencyContact.relation} - {patient.emergencyContact.phone}</p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}

function DoctorsCard() {
    return (
        <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Stethoscope className="h-10 w-10 text-primary" />
                    <CardTitle className="font-headline text-2xl">Doctors</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                 <p className="text-muted-foreground">Next appointment: <span className="font-bold text-foreground">Dr. Smith at 4:00 PM</span></p>
                <Button variant="outline" className="w-full">
                    <Phone className="mr-2" /> View Contacts
                </Button>
            </CardContent>
        </Card>
    );
}

function MedicineCard() {
    return (
        <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
                 <div className="flex items-center gap-4">
                    <Pill className="h-10 w-10 text-primary" />
                    <CardTitle className="font-headline text-2xl">Medicine</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-3 text-base">
                <p className="font-semibold text-foreground">Today's Schedule:</p>
                <ul className="space-y-2 text-muted-foreground">
                    <li className="flex justify-between items-center"><span>Lisinopril - 8 AM</span> <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/50 dark:text-green-300 px-2 py-1 rounded-full">Taken</span></li>
                    <li className="flex justify-between items-center"><span>Metformin - 8 PM</span> <span className="text-xs font-bold text-yellow-600 bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-300 px-2 py-1 rounded-full">Pending</span></li>
                </ul>
            </CardContent>
        </Card>
    );
}

function TestsCard() {
    return (
        <Card className="col-span-1 sm:col-span-2 hover:shadow-md transition-shadow">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <ClipboardList className="h-10 w-10 text-primary" />
                    <CardTitle className="font-headline text-2xl">Recent Vitals</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                    <HeartPulse className="h-10 w-10 text-chart-3" />
                    <p className="font-bold text-2xl">82</p>
                    <p className="text-muted-foreground">BPM</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Gauge className="h-10 w-10 text-chart-4" />
                    <p className="font-bold text-2xl">130/85</p>
                    <p className="text-muted-foreground">BP</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Droplet className="h-10 w-10 text-chart-5" />
                    <p className="font-bold text-2xl">140</p>
                    <p className="text-muted-foreground">mg/dL</p>
                </div>
            </CardContent>
        </Card>
    );
}


function PrescriptionsCard() {
    return (
        <Card className="col-span-1 sm:col-span-2 hover:shadow-md transition-shadow">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <FileText className="h-10 w-10 text-primary" />
                    <CardTitle className="font-headline text-2xl">Prescriptions</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="text-muted-foreground">2 new uploads from Dr. Smith.</p>
                <div>
                    <p className="font-semibold text-foreground">Notes:</p>
                    <p className="text-muted-foreground italic">"Continue medication for 2 more weeks. Follow up in a month."</p>
                </div>
                 <Button variant="secondary" className="w-full mt-2">View All Files</Button>
            </CardContent>
        </Card>
    );
}


export default function HomePage() {
  return (
    <>
      <header className="p-4 md:p-6 pb-2">
        <h1 className="font-headline text-4xl font-bold text-foreground">Your Health</h1>
      </header>
      <main className="space-y-6 p-4 md:p-6">
        <PatientProfileCard />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <DoctorsCard />
          <MedicineCard />
          <TestsCard />
          <PrescriptionsCard />
        </div>
      </main>
    </>
  );
}
