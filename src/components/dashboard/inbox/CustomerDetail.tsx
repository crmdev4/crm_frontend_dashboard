"use client";

import { Mail, Phone, MapPin, Tag, Clock, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CustomerDetailProps {
    chatId?: number;
}

export default function CustomerDetail({ chatId }: CustomerDetailProps) {
    if (!chatId) {
        return (
            <div className="flex flex-col items-center justify-center h-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-500 dark:text-gray-400 p-6 text-center">
                <p>Select a conversation to view customer details</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg overflow-y-auto">
            {/* Profile Header */}
            <Card className="border-0 rounded-none border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                <CardContent className="p-6 flex flex-col items-center">
                    <Avatar className="w-24 h-24 mb-4 border-4 border-blue-100 dark:border-blue-900">
                        <AvatarImage src={`https://i.pravatar.cc/150?u=${chatId}`} alt="Customer" />
                        <AvatarFallback className="bg-blue-600 text-white text-2xl">AF</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Alice Freeman</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">alice.freeman@example.com</p>

                    <div className="flex gap-2 mt-4 w-full">
                        <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 border-blue-200 dark:border-blue-800 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                        >
                            <User className="w-4 h-4 mr-2" />
                            Profile
                        </Button>
                        <Button 
                            size="sm" 
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Create Ticket
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 rounded-none border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                <CardHeader>
                    <CardTitle className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Contact Info
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-900 dark:text-white">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span>alice.freeman@example.com</span>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-3 text-sm text-gray-900 dark:text-white">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-3 text-sm text-gray-900 dark:text-white">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span>San Francisco, CA</span>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-3 text-sm text-gray-900 dark:text-white">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span>Local Time: 10:45 AM</span>
                    </div>
                </CardContent>
            </Card>

            {/* Tags */}
            <Card className="border-0 rounded-none border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Tags
                        </CardTitle>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950">
                            <Tag className="w-3 h-3" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="default" className="bg-blue-600 text-white">Lead</Badge>
                        <Badge variant="outline" className="border-blue-200 dark:border-blue-800 text-blue-600">Enterprise Interest</Badge>
                        <Badge variant="outline" className="border-blue-200 dark:border-blue-800 text-blue-600">Q4 Priority</Badge>
                    </div>
                </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 rounded-none bg-white dark:bg-gray-950">
                <CardHeader>
                    <CardTitle className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Recent Activity
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-3">
                        <div className="mt-1">
                            <Calendar className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Meeting Scheduled</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Tomorrow at 2:00 PM</p>
                        </div>
                    </div>
                    <Separator />
                    <div className="flex gap-3">
                        <div className="mt-1">
                            <Tag className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Tag Added</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">"Enterprise Interest" added by John Doe</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

