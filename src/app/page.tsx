import { HomeCard } from '@/components/home/HomeCard';
import { Stethoscope, Pill, ClipboardList, FileText } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <header className="p-6 pb-2">
        <h1 className="font-headline text-3xl font-bold text-foreground">Your Health</h1>
      </header>
      <main className="grid grid-cols-2 gap-4 p-4">
        <HomeCard
          title="Doctors"
          href="/doctors"
          icon={Stethoscope}
          description="Visits & contacts"
        />
        <HomeCard
          title="Medicine"
          href="/medicine"
          icon={Pill}
          description="Schedule & reminders"
        />
        <HomeCard
          title="Tests"
          href="/tests"
          icon={ClipboardList}
          description="Reports & vitals"
        />
        <HomeCard
          title="Prescriptions"
          href="/prescriptions"
          icon={FileText}
          description="View uploaded files"
        />
      </main>
    </>
  );
}
