import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Bot, Droplets, Footprints, HeartHandshake, HelpCircle, Mic, Moon, ShieldCheck, Smile, Frown, Meh, Sun, Users, Video } from "lucide-react";

function OneTouchModeCard() {
    return (
        <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <HeartHandshake className="text-green-600 dark:text-green-400" />
                    One-Touch Automatic Mode
                </CardTitle>
                <CardDescription>Let Guardian Angel manage everything. No need to change any settings.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
                <span className="font-bold text-lg text-green-700 dark:text-green-300">Everything is OK Mode</span>
                <Switch defaultChecked id="one-touch-mode" className="data-[state=checked]:bg-green-600" />
            </CardContent>
        </Card>
    );
}

function FeelingCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">How are you feeling?</CardTitle>
                <CardDescription>Your selection helps us adjust your care.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
                <Button variant="outline" className="h-24 flex-col gap-2 text-lg">
                    <Smile className="h-8 w-8 text-green-500" />
                    <span>Good</span>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2 text-lg">
                    <Meh className="h-8 w-8 text-yellow-500" />
                    <span>Tired</span>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2 text-lg">
                    <Frown className="h-8 w-8 text-red-500" />
                    <span>Unwell</span>
                </Button>
            </CardContent>
        </Card>
    )
}

function VoiceCommandsCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <Mic />
                    Just Speak to Me
                </CardTitle>
                <CardDescription>Use simple voice commands. No reading required.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
                <p>"Call my son"</p>
                <p>"I need help"</p>
                <p>"Remind me about my medicine"</p>
            </CardContent>
        </Card>
    )
}

function HelpButtonCard() {
    return (
        <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700 text-center">
            <CardHeader>
                 <CardTitle className="font-headline">Need Assistance?</CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="h-24 w-full text-2xl font-bold bg-yellow-400 hover:bg-yellow-500 text-yellow-900">
                    <HelpCircle className="mr-4 h-8 w-8"/>
                    Help Me Now
                </Button>
                 <p className="text-sm mt-4 text-yellow-700 dark:text-yellow-300">This will immediately alert your family and caregiver.</p>
            </CardContent>
        </Card>
    )
}

function DayNightModeCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Day & Night Comfort</CardTitle>
                <CardDescription>Switches automatically for active days and peaceful nights.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Sun className="text-yellow-500"/>
                    <span>Day Mode</span>
                </div>
                <Switch disabled id="day-night-mode" defaultChecked />
                <div className="flex items-center gap-2">
                    <Moon className="text-blue-400"/>
                    <span>Night Mode</span>
                </div>
            </CardContent>
        </Card>
    )
}

function GentleRemindersCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Gentle Daily Reminders</CardTitle>
                <CardDescription>Feels like a caring companion, not a machine.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="flex items-center gap-4 text-muted-foreground">
                    <Droplets className="h-6 w-6 text-blue-500" />
                    <span>"Time to drink some water 😊"</span>
                 </div>
                 <div className="flex items-center gap-4 text-muted-foreground">
                    <Footprints className="h-6 w-6 text-green-500" />
                    <span>"A short walk will help your health"</span>
                 </div>
            </CardContent>
        </Card>
    )
}

function CompanionChatbotCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Your AI Companion</CardTitle>
                <CardDescription>For emotional support and to reduce loneliness.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Button variant="outline" className="w-full">
                    <Bot className="mr-2"/>
                    Chat with your companion
                 </Button>
            </CardContent>
        </Card>
    )
}

function FamilySettingsCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <ShieldCheck />
                    For Family & Caregivers
                </CardTitle>
                <CardDescription>Advanced settings are managed by your family to keep things simple for you.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button variant="secondary" className="w-full">
                    <Users className="mr-2"/>
                    View Advanced Settings
                </Button>
            </CardContent>
        </Card>
    )
}


export default function SettingsPage() {
    return (
        <>
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-8">
                <h1 className="font-headline text-xl font-semibold">Smart Settings</h1>
            </header>

            <main className="flex-1 space-y-8 p-4 pt-6 md:p-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    
                    <div className="lg:col-span-3">
                        <OneTouchModeCard />
                    </div>

                    <div className="space-y-8 lg:col-span-2">
                        <FeelingCard />
                        <VoiceCommandsCard />
                        <GentleRemindersCard />
                    </div>

                     <div className="space-y-8 lg:col-span-1">
                        <HelpButtonCard />
                        <DayNightModeCard />
                        <CompanionChatbotCard />
                        <FamilySettingsCard />
                    </div>

                </div>
            </main>
        </>
    );
}
