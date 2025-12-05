"use client";

import { Eye, Edit2, Mail } from 'lucide-react';
import DataTable, { Column, ActionButton } from '@/components/DataTable';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Deal {
    id: number;
    title: string;
    subtext: string;
    company: string;
    contact: string;
    companyLogo: string;
    value: string;
    probability: string;
    stage: string;
    owner: { name: string; avatar: string };
    closeDate: string;
    daysLeft: string;
    daysLeftColor: string;
}

const deals: Deal[] = [
    {
        id: 1,
        title: 'Enterprise Software License',
        subtext: 'Annual subscription renewal',
        company: 'TechCorp Enterprise',
        contact: 'Michael Anderson',
        companyLogo: 'https://ui-avatars.com/api/?name=TC&background=0D8ABC&color=fff',
        value: '$125,000',
        probability: '90% probability',
        stage: 'Negotiation',
        owner: { name: 'Sarah J.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
        closeDate: 'Dec 15, 2024',
        daysLeft: '5 days left',
        daysLeftColor: 'text-green-600',
    },
    {
        id: 2,
        title: 'Marketing Automation Platform',
        subtext: 'New customer acquisition',
        company: 'Innovate Solutions',
        contact: 'Jennifer Smith',
        companyLogo: 'https://ui-avatars.com/api/?name=IS&background=random',
        value: '$45,000',
        probability: '75% probability',
        stage: 'Proposal',
        owner: { name: 'Mike D.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e' },
        closeDate: 'Jan 10, 2025',
        daysLeft: '31 days left',
        daysLeftColor: 'text-gray-500',
    },
    {
        id: 3,
        title: 'Cloud Infrastructure Upgrade',
        subtext: 'Migration from on-premise',
        company: 'Global Systems Inc.',
        contact: 'Robert Chen',
        companyLogo: 'https://ui-avatars.com/api/?name=GS&background=random',
        value: '$280,000',
        probability: '40% probability',
        stage: 'Discovery',
        owner: { name: 'Sarah J.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
        closeDate: 'Feb 28, 2025',
        daysLeft: '80 days left',
        daysLeftColor: 'text-gray-500',
    },
    {
        id: 4,
        title: 'Q1 Consulting Services',
        subtext: 'Strategic planning session',
        company: 'Alpha Ventures',
        contact: 'Emily Wilson',
        companyLogo: 'https://ui-avatars.com/api/?name=AV&background=random',
        value: '$15,000',
        probability: '60% probability',
        stage: 'Qualified',
        owner: { name: 'David L.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f' },
        closeDate: 'Jan 05, 2025',
        daysLeft: '26 days left',
        daysLeftColor: 'text-gray-500',
    },
];

const getStageColor = (stage: string) => {
    switch (stage) {
        case 'Negotiation': return 'bg-yellow-100 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800';
        case 'Proposal': return 'bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800';
        case 'Discovery': return 'bg-purple-100 text-purple-800 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800';
        case 'Qualified': return 'bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800';
        default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
};

export default function DealsTable() {
    const columns: Column<Deal>[] = [
        {
            key: 'title',
            label: 'Deal',
            render: (value, row) => (
                <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{row.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{row.subtext}</p>
                </div>
            ),
        },
        {
            key: 'company',
            label: 'Company',
            render: (value, row) => (
                <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src={row.companyLogo} alt={row.company} />
                        <AvatarFallback>{row.company.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{row.company}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{row.contact}</p>
                    </div>
                </div>
            ),
        },
        {
            key: 'value',
            label: 'Value',
            render: (value, row) => (
                <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{row.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{row.probability}</p>
                </div>
            ),
        },
        {
            key: 'stage',
            label: 'Stage',
            render: (value, row) => (
                <Badge className={cn("px-2.5 py-1 rounded-full text-xs font-semibold", getStageColor(row.stage))}>
                    {row.stage}
                </Badge>
            ),
        },
        {
            key: 'owner',
            label: 'Owner',
            render: (value, row) => (
                <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                        <AvatarImage src={row.owner.avatar} alt={row.owner.name} />
                        <AvatarFallback>{row.owner.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{row.owner.name}</span>
                </div>
            ),
        },
        {
            key: 'closeDate',
            label: 'Close Date',
            render: (value, row) => (
                <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{row.closeDate}</p>
                    <p className={cn("text-xs font-medium mt-0.5", row.daysLeftColor)}>{row.daysLeft}</p>
                </div>
            ),
        },
    ];

    const actions: ActionButton[] = [
        {
            icon: Eye,
            label: 'View',
            onClick: (row) => console.log('View', row),
        },
        {
            icon: Edit2,
            label: 'Edit',
            onClick: (row) => console.log('Edit', row),
        },
        {
            icon: Mail,
            label: 'Email',
            onClick: (row) => console.log('Email', row),
        },
    ];

    return (
        <DataTable
            data={deals}
            columns={columns}
            actions={actions}
            showCheckbox={true}
            showPagination={true}
            currentPage={1}
            totalPages={1}
            getRowKey={(row) => row.id}
        />
    );
}

