import { BottomNav } from "./BottomNav";
import { FloatingChatbotButton } from "./home/FloatingChatbotButton";

export function MobileLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 pb-24">
                {children}
            </main>
            <FloatingChatbotButton />
            <BottomNav />
        </div>
    );
}
