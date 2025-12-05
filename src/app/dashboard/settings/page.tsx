'use client';

import { useState } from 'react';
import { User, Bell, Plug, Settings as SettingsIcon } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// TODO: Import these components when created
// import ProfileSettings from '@/components/settings/ProfileSettings';
// import NotificationSettings from '@/components/settings/NotificationSettings';
// import IntegrationSettings from '@/components/settings/IntegrationSettings';
// import SystemSettings from '@/components/settings/SystemSettings';

interface Tab {
    id: string;
    name: string;
    icon: LucideIcon;
}

const tabs: Tab[] = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'integrations', name: 'Integrations', icon: Plug },
    { id: 'system', name: 'System', icon: SettingsIcon },
];

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className="p-6 border rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                        <p className="text-muted-foreground">Profile settings will be displayed here</p>
                    </div>
                );
            case 'notifications':
                return (
                    <div className="p-6 border rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
                        <p className="text-muted-foreground">Notification settings will be displayed here</p>
                    </div>
                );
            case 'integrations':
                return (
                    <div className="p-6 border rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Integration Settings</h2>
                        <p className="text-muted-foreground">Integration settings will be displayed here</p>
                    </div>
                );
            case 'system':
                return (
                    <div className="p-6 border rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">System Settings</h2>
                        <p className="text-muted-foreground">System settings will be displayed here</p>
                    </div>
                );
            default:
                return (
                    <div className="p-6 border rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                        <p className="text-muted-foreground">Profile settings will be displayed here</p>
                    </div>
                );
        }
    };

    return (
        <div className="flex flex-col gap-6 p-6 min-h-screen w-full bg-background/50">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">
                    Manage your account settings and preferences
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Navigation */}
                <div className="lg:w-64 flex-shrink-0">
                    <nav className="space-y-1">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                        activeTab === tab.id
                                            ? 'bg-primary text-white'
                                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                    }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span className="font-medium">{tab.name}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
}

