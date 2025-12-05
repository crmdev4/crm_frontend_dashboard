"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Paperclip, MoreVertical, Phone, Video, Loader2, Check, CheckCheck, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface Message {
    id: number;
    chatId: number;
    senderId: number;
    text: string;
    time: string;
    type: string;
    status: 'pending' | 'sent' | 'read' | 'failed';
}

const INITIAL_MOCK_MESSAGES: Message[] = [
    {
        id: 1,
        chatId: 1,
        senderId: 2,
        text: "Hi, I'm interested in your enterprise plan. Could you tell me more about the features?",
        time: "10:00 AM",
        type: "text",
        status: "read"
    },
    {
        id: 2,
        chatId: 1,
        senderId: 1,
        text: "Hello! Thanks for reaching out. Our enterprise plan includes dedicated support, unlimited users, and advanced analytics.",
        time: "10:05 AM",
        type: "text",
        status: "read"
    },
    {
        id: 3,
        chatId: 1,
        senderId: 2,
        text: "That sounds great. What about the pricing?",
        time: "10:10 AM",
        type: "text",
        status: "read"
    },
    {
        id: 4,
        chatId: 1,
        senderId: 1,
        text: "The pricing depends on the number of seats. I can send you a detailed quote if you'd like.",
        time: "10:12 AM",
        type: "text",
        status: "read"
    },
    {
        id: 5,
        chatId: 1,
        senderId: 2,
        text: "Yes, please do. Thanks!",
        time: "10:15 AM",
        type: "text",
        status: "read"
    },
];

interface ChatWindowProps {
    chatId?: number;
}

export default function ChatWindow({ chatId }: ChatWindowProps) {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (!chatId) return;

        const loadMessages = async () => {
            setIsLoading(true);
            try {
                // Simulate loading
                await new Promise(resolve => setTimeout(resolve, 500));
                const chatMockMessages = INITIAL_MOCK_MESSAGES.filter(m => m.chatId === Number(chatId));
                setMessages(chatMockMessages);
            } catch (error) {
                console.error("Failed to load messages", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadMessages();
    }, [chatId]);

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const newMessage: Message = {
            id: Date.now(),
            chatId: Number(chatId),
            senderId: 1,
            text: message,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: "text",
            status: "pending"
        };

        setMessages(prev => [...prev, newMessage]);
        setMessage("");

        // Simulate sending
        setTimeout(() => {
            const isSuccess = Math.random() > 0.2;
            const newStatus = isSuccess ? "sent" : "failed" as const;

            setMessages(prev => prev.map(msg =>
                msg.id === newMessage.id ? { ...msg, status: newStatus } : msg
            ));
        }, 2000);
    };

    const handleRetry = async (msgId: number) => {
        setMessages(prev => prev.map(msg =>
            msg.id === msgId ? { ...msg, status: "pending" } : msg
        ));

        setTimeout(() => {
            const isSuccess = Math.random() > 0.2;
            const newStatus = isSuccess ? "sent" : "failed" as const;

            setMessages(prev => prev.map(msg =>
                msg.id === msgId ? { ...msg, status: newStatus } : msg
            ));
        }, 2000);
    };

    if (!chatId) {
        return (
            <div className="flex flex-col items-center justify-center h-full bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400">
                <p className="text-lg">Select a conversation to start chatting</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={`https://i.pravatar.cc/150?u=${chatId}`} alt="User" />
                        <AvatarFallback>AF</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Alice Freeman</h3>
                        <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Online
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950">
                        <Phone className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950">
                        <Video className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <MoreVertical className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-950">
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                    </div>
                ) : (
                    <>
                        {messages.map((msg) => {
                            const isMe = msg.senderId === 1;
                            return (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex w-full",
                                        isMe ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div className="flex flex-col max-w-[75%]">
                                        <div
                                            className={cn(
                                                "rounded-2xl px-4 py-2 text-sm",
                                                isMe
                                                    ? "bg-blue-600 text-white rounded-br-md"
                                                    : "bg-white dark:bg-gray-950 text-gray-900 dark:text-white rounded-bl-md border border-gray-200 dark:border-gray-800"
                                            )}
                                        >
                                            <p className="break-words whitespace-pre-wrap">{msg.text}</p>
                                            <div className={cn(
                                                "flex items-center justify-end gap-1 mt-1",
                                                isMe ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
                                            )}>
                                                <span className="text-[10px]">{msg.time}</span>
                                                {isMe && (
                                                    <span className="ml-1">
                                                        {msg.status === 'pending' && <Loader2 className="w-3 h-3 animate-spin" />}
                                                        {msg.status === 'sent' && <Check className="w-3 h-3" />}
                                                        {msg.status === 'read' && <CheckCheck className="w-3 h-3" />}
                                                        {msg.status === 'failed' && <AlertTriangle className="w-3 h-3 text-red-300" />}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {isMe && msg.status === 'failed' && (
                                            <button
                                                onClick={() => handleRetry(msg.id)}
                                                className="text-xs text-red-500 hover:underline mt-1 mr-1 text-right"
                                            >
                                                Failed to send. Retry?
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                        <div ref={messagesEndRef} />
                    </>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-end gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 flex-shrink-0 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                    >
                        <Paperclip className="w-5 h-5" />
                    </Button>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage();
                            }
                        }}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent border-none focus:outline-none resize-none max-h-32 min-h-[36px] py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        rows={1}
                    />
                    <Button 
                        size="icon" 
                        className="h-9 w-9 flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white" 
                        onClick={handleSendMessage} 
                        disabled={!message.trim()}
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

