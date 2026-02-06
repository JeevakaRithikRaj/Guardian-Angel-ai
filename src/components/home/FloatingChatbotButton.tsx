import Link from 'next/link';
import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingChatbotButton() {
  return (
    <Button
      asChild
      className="fixed bottom-24 right-4 z-40 h-16 w-16 rounded-full shadow-lg"
    >
      <Link href="/assistant">
        <Bot className="h-8 w-8" />
        <span className="sr-only">Open AI Assistant</span>
      </Link>
    </Button>
  );
}
