'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';
import { Home, Settings, Users, HeartPulse, LogOut } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AppSidebar() {
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <HeartPulse className="text-primary h-8 w-8" />
          <h1 className="font-headline text-lg font-semibold">Guardian Angel</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" isActive>
              <Home />
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#">
              <Users />
              Patients
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#">
              <Settings />
              Settings
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            {userAvatar && (
              <AvatarImage 
                src={userAvatar.imageUrl} 
                alt="Caregiver" 
                data-ai-hint={userAvatar.imageHint}
                width={40}
                height={40}
              />
            )}
            <AvatarFallback>CG</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">Maria Garcia</span>
            <span className="text-sm text-muted-foreground">Caregiver</span>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto">
            <LogOut />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
