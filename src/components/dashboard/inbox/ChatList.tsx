"use client";

import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface Chat {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    time: string;
    unread: number;
    status: 'online' | 'offline' | 'away';
    tags: string[];
}

const MOCK_CHATS: Chat[] = [
    {
        id: 1,
        name: 'Alice Freeman',
        avatar: 'https://i.pravatar.cc/150?u=1',
        lastMessage: 'Hey, I wanted to ask about the pricing plan...',
        time: '10:30 AM',
        unread: 2,
        status: 'online',
        tags: ['Lead']
    },
    {
        id: 2,
        name: 'Bob Smith',
        avatar: 'https://i.pravatar.cc/150?u=2',
        lastMessage: 'Thanks for the quick response!',
        time: 'Yesterday',
        unread: 0,
        status: 'offline',
        tags: ['Customer']
    },
    {
        id: 3,
        name: 'Charlie Brown',
        avatar: 'https://i.pravatar.cc/150?u=3',
        lastMessage: 'Is there any update on my ticket?',
        time: 'Yesterday',
        unread: 0,
        status: 'online',
        tags: ['Support']
    },
    {
        id: 4,
        name: 'Diana Prince',
        avatar: 'https://i.pravatar.cc/150?u=4',
        lastMessage: 'I would like to upgrade my subscription.',
        time: 'Mon',
        unread: 1,
        status: 'away',
        tags: ['VIP']
    },
    {
        id: 5,
        name: 'Evan Wright',
        avatar: 'https://i.pravatar.cc/150?u=5',
        lastMessage: 'Can you send me the invoice?',
        time: 'Mon',
        unread: 0,
        status: 'offline',
        tags: ['Billing']
    },
];

interface ChatListProps {
    selectedChatId?: number;
    onSelectChat: (chatId: number) => void;
}

export default function ChatList({ selectedChatId, onSelectChat }: ChatListProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredChats = MOCK_CHATS.filter(chat =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col h-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="p-4 space-y-4 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Inbox</h2>
                    <Button 
                        size="icon" 
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950"
                    >
                        <Plus className="w-5 h-5" />
                    </Button>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        type="search"
                        placeholder="Search messages..."
                        className="pl-9 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-950">
                <div className="p-2">
                    {filteredChats.map((chat, index) => (
                        <div key={chat.id}>
                            <button
                                onClick={() => onSelectChat(chat.id)}
                                className={cn(
                                    "w-full flex items-start gap-3 p-3 text-left transition-colors rounded-lg",
                                    selectedChatId === chat.id 
                                        ? "bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900" 
                                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                )}
                            >
                                <div className="relative flex-shrink-0">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src={chat.avatar} alt={chat.name} />
                                        <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <span className={cn(
                                        "absolute bottom-0 right-0 w-3 h-3 border-2 border-white dark:border-gray-900 rounded-full",
                                        chat.status === 'online' ? "bg-green-500" :
                                        chat.status === 'away' ? "bg-yellow-500" : "bg-gray-400"
                                    )} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className={cn(
                                            "font-medium truncate text-sm",
                                            selectedChatId === chat.id 
                                                ? "text-blue-900 dark:text-blue-100" 
                                                : "text-gray-900 dark:text-white"
                                        )}>
                                            {chat.name}
                                        </span>
                                        <span className={cn(
                                            "text-xs whitespace-nowrap ml-2",
                                            selectedChatId === chat.id 
                                                ? "text-blue-600 dark:text-blue-400" 
                                                : "text-gray-500 dark:text-gray-400"
                                        )}>
                                            {chat.time}
                                        </span>
                                    </div>
                                    <p className={cn(
                                        "text-sm truncate mb-2",
                                        selectedChatId === chat.id 
                                            ? "text-blue-700 dark:text-blue-300" 
                                            : "text-gray-600 dark:text-gray-400"
                                    )}>
                                        {chat.lastMessage}
                                    </p>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {chat.tags.map(tag => (
                                            <Badge 
                                                key={tag} 
                                                variant={selectedChatId === chat.id ? "default" : "secondary"}
                                                className={cn(
                                                    "text-xs",
                                                    selectedChatId === chat.id && "bg-blue-600 text-white"
                                                )}
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                        {chat.unread > 0 && (
                                            <Badge 
                                                variant="default"
                                                className="ml-auto bg-blue-600 text-white text-xs font-semibold"
                                            >
                                                {chat.unread}
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </button>
                            {index < filteredChats.length - 1 && (
                                <Separator className="my-1" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

