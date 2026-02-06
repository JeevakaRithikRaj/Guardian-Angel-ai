import type { Patient } from '@/lib/types';
import { Bell, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { SidebarTrigger } from './ui/sidebar';

interface AppHeaderProps {
  patient: Patient;
}

export function AppHeader({ patient }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-8">
      <SidebarTrigger className="md:hidden"/>
      <div>
        <h1 className="font-headline text-xl font-semibold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Monitoring for <span className="font-semibold text-foreground">{patient.name}</span>
        </p>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-8 w-full md:w-[200px] lg:w-[300px]" />
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
    </header>
  );
}
