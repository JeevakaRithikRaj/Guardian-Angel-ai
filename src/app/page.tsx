'use client';

import Link from 'next/link';
import Image from 'next/image';
import { patient, vitals, emergencyContacts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { HeartPulse, Moon, AlertTriangle, Phone } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CompanionBotCard() {
  const botAvatar = PlaceHolderImages.find(p => p.id === 'bot-avatar');
  return (
    <div className="flex flex-col items-center text-center p-6 bg-primary/10 rounded-3xl">
      <Avatar className="h-40 w-40 border-8 border-white shadow-lg mb-4">
        {botAvatar ? (
          <AvatarImage src={botAvatar.imageUrl} alt="AI Companion" data-ai-hint={botAvatar.imageHint} />
        ) : (
          <AvatarFallback className="text-5xl">AI</AvatarFallback>
        )}
      </Avatar>
      <h2 className="text-4xl font-bold font-headline text-foreground">Hello, {patient.name.split(' ')[0]}</h2>
      <p className="text-xl text-muted-foreground mt-1">I'm here to help you.</p>
    </div>
  );
}

function StatusCard() {
  const latestHeartRate = vitals.heartRate[vitals.heartRate.length - 1]?.value || 0;
  const sleepHours = vitals.sleep[0]?.value || 0;
  return (
    <Card className="bg-green-100/80 dark:bg-green-900/30 border-green-500/30">
      <CardContent className="p-6">
        <div className="flex items-center justify-center gap-4 text-green-700 dark:text-green-300">
          <HeartPulse className="h-10 w-10" />
          <h3 className="text-4xl font-bold">Status: All Good</h3>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6 text-center">
          <div>
            <p className="text-6xl font-bold text-foreground">{latestHeartRate}</p>
            <p className="text-lg text-muted-foreground">Heart Rate</p>
          </div>
          <div>
            <p className="text-6xl font-bold text-foreground">{sleepHours}</p>
            <p className="text-lg text-muted-foreground">Hours Sleep</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function FacesOfTheDay() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-4">Faces of the Day</h3>
      <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-sm mx-auto">
        <CarouselContent>
          {emergencyContacts.map((contact) => {
            const contactAvatar = PlaceHolderImages.find(p => p.id === contact.avatarId);
            return (
              <CarouselItem key={contact.id} className="basis-1/2">
                <div className="p-1">
                  <Card className="shadow-none border-none bg-transparent">
                    <CardContent className="flex flex-col items-center justify-center p-2 text-center">
                      <Avatar className="h-28 w-28 border-4 border-background">
                        {contactAvatar && <AvatarImage src={contactAvatar.imageUrl} alt={contact.name} data-ai-hint={contactAvatar.imageHint}/>}
                        <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <p className="font-bold text-lg mt-2">{contact.name}</p>
                      <p className="text-sm text-muted-foreground">{contact.relation}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-4"/>
        <CarouselNext className="-right-4"/>
      </Carousel>
    </div>
  );
}


export default function HomePage() {
  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 space-y-8 p-4 md:p-6">
        <CompanionBotCard />
        <StatusCard />
        <FacesOfTheDay />
      </main>
      <footer className="grid grid-cols-2 gap-4 p-4 sticky bottom-20">
          <Button variant="destructive" className="h-32 text-4xl font-bold rounded-2xl bg-destructive/80 text-destructive-foreground hover:bg-destructive">
            <AlertTriangle className="h-12 w-12 mr-4"/> Help
          </Button>
          <Button asChild className="h-32 text-4xl font-bold rounded-2xl">
            <Link href="/assistant">
              <Phone className="h-12 w-12 mr-4"/> Talk
            </Link>
          </Button>
      </footer>
    </div>
  );
}
