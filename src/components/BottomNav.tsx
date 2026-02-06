'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Pill, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Heart, label: 'Home' },
  { href: '/medicine', icon: Pill, label: 'Medicine' },
  { href: '/assistant', icon: Bot, label: 'Assistant' },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm">
      <div className="grid h-24 grid-cols-3 items-center">
        {navItems.map((item) => {
          const isActive = (item.href === '/' && pathname === '/') || (item.href !== '/' && pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors hover:text-primary',
                isActive ? 'text-primary' : 'text-gray-500'
              )}
            >
              <item.icon className="h-10 w-10" />
              <span className="text-base font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
