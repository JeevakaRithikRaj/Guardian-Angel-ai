'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarDays, Heart, Bot, FileBadge } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/calendar', icon: CalendarDays, label: 'Calendar' },
  { href: '/', icon: Heart, label: 'Your Health' },
  { href: '/assistant', icon: Bot, label: 'Assistant' },
  { href: '/medical-id', icon: FileBadge, label: 'Medical ID' },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm">
      <div className="grid h-20 grid-cols-4 items-center">
        {navItems.map((item) => {
          const isActive = (item.href === '/' && pathname === '/') || (item.href !== '/' && pathname.startsWith(item.href));
          
          if (item.href === '/') {
            return (
              <Link key={item.href} href={item.href} className="relative flex justify-center">
                <div className={cn(
                  'flex h-16 w-16 -translate-y-4 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105',
                  isActive && 'ring-4 ring-primary/50'
                  )}>
                  <item.icon className="h-8 w-8" />
                </div>
                <span className="absolute -bottom-1 text-xs font-medium text-primary">{item.label}</span>
              </Link>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors hover:text-primary',
                isActive && 'text-primary'
              )}
            >
              <item.icon className="h-7 w-7" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
