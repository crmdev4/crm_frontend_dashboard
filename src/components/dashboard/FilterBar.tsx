"use client";

import { Search, Plus, ChevronDown, Mail, Calendar, Kanban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Filter bar component for dashboard
 */
export default function FilterBar() {
    return (
        <Card className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 mb-6">
            <CardContent className="p-4">
                <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
                    {/* Left: Search */}
                    <div className="w-full lg:w-1/3 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="Search deals..."
                            className="pl-10 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                        />
                    </div>

                    {/* Middle: Filters */}
                    <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto">
                        <Button variant="outline" size="sm" className="whitespace-nowrap">
                            All Stages
                            <ChevronDown className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline" size="sm" className="whitespace-nowrap">
                            All Owners
                            <ChevronDown className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline" size="sm" className="whitespace-nowrap">
                            <Kanban className="w-4 h-4 mr-2" />
                            Kanban View
                        </Button>
                    </div>

                    {/* Right: Action */}
                    <div className="w-full lg:w-auto">
                        <Button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                            <Plus className="w-5 h-5 mr-2" />
                            New Deal
                        </Button>
                    </div>
                </div>

                {/* Bulk Actions Row */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                        <input 
                            type="checkbox" 
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-800" 
                        />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Select All</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200">
                            <Mail className="w-3.5 h-3.5 mr-1.5" />
                            Send Proposal
                        </Button>
                        <Button variant="outline" size="sm" className="bg-green-50 text-green-600 hover:bg-green-100 border-green-200">
                            <Calendar className="w-3.5 h-3.5 mr-1.5" />
                            Schedule Follow-up
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

