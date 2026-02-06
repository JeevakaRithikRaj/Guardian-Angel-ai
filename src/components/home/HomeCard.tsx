import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface HomeCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  className?: string;
}

export function HomeCard({ title, description, href, icon: Icon, className }: HomeCardProps) {
  return (
    <Link href={href} className="block">
      <Card className={cn("h-full hover:bg-card/90 transition-colors", className)}>
        <CardHeader className="p-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
            <Icon className="h-8 w-8" />
          </div>
          <CardTitle className="text-center font-headline text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
           <CardDescription className="text-center text-xs">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
