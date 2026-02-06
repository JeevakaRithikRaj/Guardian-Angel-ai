import { BottomNav } from "./BottomNav";

export function MobileLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 pb-28">
                {children}
            </main>
            <BottomNav />
        </div>
    );
}
