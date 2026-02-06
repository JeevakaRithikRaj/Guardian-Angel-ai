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
import { Home, Settings, Users, LogOut, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { usePathname } from 'next/navigation';

export function AppSidebar() {
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-primary h-8 w-8" />
          <h1 className="font-headline text-lg font-semibold">Guardian Angel</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="/" isActive={pathname === '/'}>
              <Home />
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/patients" isActive={pathname.startsWith('/patients')}>
              <Users />
              Patients
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/settings" isActive={pathname === '/settings'}>
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
