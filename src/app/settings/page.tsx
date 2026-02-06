import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { emergencyContacts, patient } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Bell, Bot, HeartPulse, Languages, Pencil, Phone, Save, Shield, User, UserPlus } from "lucide-react";

function ProfileSettingsCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <User className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline">User Profile</CardTitle>
                </div>
                <CardDescription>Manage patient details and medical conditions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={patient.name} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" defaultValue={patient.age} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="medical-conditions">Medical Conditions</Label>
                    <Textarea id="medical-conditions" defaultValue={patient.medicalConditions} placeholder="e.g., Hypertension, Diabetes" />
                </div>
                <Button className="w-full sm:w-auto">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                </Button>
            </CardContent>
        </Card>
    );
}

function EmergencyContactsCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Phone className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline">Emergency Contacts</CardTitle>
                </div>
                <CardDescription>Manage emergency contacts and doctors.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {emergencyContacts.map((contact) => {
                    const avatar = PlaceHolderImages.find(p => p.id === contact.avatarId);
                    return (
                        <div key={contact.id} className="flex items-center gap-4">
                            <Avatar>
                                {avatar && <AvatarImage src={avatar.imageUrl} alt={contact.name} data-ai-hint={avatar.imageHint} />}
                                <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <p className="font-semibold">{contact.name}</p>
                                <p className="text-sm text-muted-foreground">{contact.relation} &middot; {contact.phone}</p>
                            </div>
                            <Button variant="ghost" size="icon">
                                <Pencil className="h-4 w-4" />
                            </Button>
                        </div>
                    );
                })}
                <Button variant="outline" className="w-full">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add Contact
                </Button>
            </CardContent>
        </Card>
    );
}

function HealthMonitoringCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <HeartPulse className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline">Health Monitoring</CardTitle>
                </div>
                <CardDescription>Customize vitals tracking and alert sensitivity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label>Heart Rate Range (bpm)</Label>
                    <div className="flex items-center gap-2">
                        <span>50</span>
                        <Slider defaultValue={[60, 100]} max={150} min={50} step={1} />
                        <span>150</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="bp-tracking">Blood Pressure Tracking</Label>
                    <Switch id="bp-tracking" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="activity-tracking">Activity Tracking</Label>
                    <Switch id="activity-tracking" defaultChecked />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="alert-sensitivity">Alert Sensitivity</Label>
                    <Select defaultValue="medium">
                        <SelectTrigger id="alert-sensitivity">
                            <SelectValue placeholder="Select sensitivity" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    );
}

function NotificationSettingsCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Bell className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline">Notifications</CardTitle>
                </div>
                <CardDescription>Manage how and when you receive alerts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label htmlFor="all-notifications">Enable All Notifications</Label>
                    <Switch id="all-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="priority-only">Priority Alerts Only</Label>
                    <Switch id="priority-only" />
                </div>
                <div className="space-y-2">
                    <Label>Quiet Hours (Night Mode)</Label>
                    <div className="flex gap-2">
                        <Input type="time" defaultValue="22:00" />
                        <Input type="time" defaultValue="07:00" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function CompanionSettingsCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Bot className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline">AI Companion</CardTitle>
                </div>
                <CardDescription>Adjust the settings for the AI social companion.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="flex items-center justify-between">
                    <Label htmlFor="enable-chatbot">Enable Chatbot</Label>
                    <Switch id="enable-chatbot" defaultChecked />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="interaction-type">Interaction Type</Label>
                    <Select defaultValue="text">
                        <SelectTrigger id="interaction-type">
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="text">Text</SelectItem>
                            <SelectItem value="voice">Voice</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="language" className="flex items-center gap-2">
                      <Languages className="h-4 w-4" />
                      Language
                    </Label>
                    <Select defaultValue="english">
                        <SelectTrigger id="language">
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="tamil">Tamil</SelectItem>
                            <SelectItem value="spanish">Spanish</SelectItem>
                            <SelectItem value="french">French</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    )
}

function PrivacySecurityCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline">Privacy & Security</CardTitle>
                </div>
                <CardDescription>Control data sharing and login settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="flex items-center justify-between">
                    <Label htmlFor="data-sharing">Share Anonymized Data</Label>
                    <Switch id="data-sharing" />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="secure-login">Enable Biometric/PIN Login</Label>
                    <Switch id="secure-login" defaultChecked />
                </div>
                <Button variant="outline" className="w-full">Manage who can view health data</Button>
            </CardContent>
        </Card>
    )
}

export default function SettingsPage() {
    return (
        <>
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-8">
                <h1 className="font-headline text-xl font-semibold">Settings</h1>
            </header>

            <main className="flex-1 space-y-8 p-4 pt-6 md:p-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-1">
                        <ProfileSettingsCard />
                        <EmergencyContactsCard />
                    </div>
                    <div className="space-y-6 lg:col-span-1">
                        <HealthMonitoringCard />
                        <CompanionSettingsCard />
                    </div>
                    <div className="space-y-6 lg:col-span-1">
                        <NotificationSettingsCard />
                        <PrivacySecurityCard />
                    </div>
                </div>
            </main>
        </>
    );
}
