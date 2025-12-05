'use client';

import { useState } from 'react';
import { Plus, Search, MessageSquare, Clock, CheckCircle, Calendar, Eye, Send, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import StaticData from '@/components/StaticData';
import DataTable, { Column, ActionButton } from '@/components/DataTable';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface Campaign {
    id: number;
    name: string;
    message: string;
    status: 'draft' | 'scheduled' | 'sent' | 'failed';
    recipients: number;
    sent: number;
    delivered: number;
    read: number;
    failed: number;
    createdAt: string;
    scheduledAt: string | null;
    sentAt: string | null;
}

interface StatusConfig {
    label: string;
    variant: 'default' | 'secondary' | 'destructive' | 'outline';
    icon: LucideIcon;
}

const MOCK_CAMPAIGNS: Campaign[] = [
    {
        id: 1,
        name: "Promo Akhir Tahun 2024",
        message: "Dapatkan diskon hingga 50% untuk semua produk! Promo terbatas hingga 31 Desember.",
        status: "sent",
        recipients: 1250,
        sent: 1250,
        delivered: 1180,
        read: 890,
        failed: 70,
        createdAt: "2024-12-01",
        scheduledAt: "2024-12-02 09:00",
        sentAt: "2024-12-02 09:05"
    },
    {
        id: 2,
        name: "Reminder Pembayaran",
        message: "Halo {name}, ini adalah pengingat untuk pembayaran invoice #{invoice_number}.",
        status: "scheduled",
        recipients: 450,
        sent: 0,
        delivered: 0,
        read: 0,
        failed: 0,
        createdAt: "2024-12-03",
        scheduledAt: "2024-12-05 10:00",
        sentAt: null
    },
    {
        id: 3,
        name: "Update Produk Baru",
        message: "Kami baru saja meluncurkan produk terbaru! Cek sekarang di website kami.",
        status: "draft",
        recipients: 0,
        sent: 0,
        delivered: 0,
        read: 0,
        failed: 0,
        createdAt: "2024-12-03",
        scheduledAt: null,
        sentAt: null
    },
    {
        id: 4,
        name: "Flash Sale Weekend",
        message: "Flash Sale Weekend! Diskon 30% untuk semua kategori. Buruan sebelum kehabisan!",
        status: "sent",
        recipients: 2100,
        sent: 2100,
        delivered: 1950,
        read: 1420,
        failed: 150,
        createdAt: "2024-11-29",
        scheduledAt: "2024-11-30 08:00",
        sentAt: "2024-11-30 08:03"
    },
    {
        id: 5,
        name: "Welcome New Customers",
        message: "Selamat datang! Nikmati promo khusus untuk member baru.",
        status: "draft",
        recipients: 0,
        sent: 0,
        delivered: 0,
        read: 0,
        failed: 0,
        createdAt: "2024-12-04",
        scheduledAt: null,
        sentAt: null
    },
    {
        id: 6,
        name: "Monthly Newsletter",
        message: "Baca newsletter bulanan kami dengan update terbaru dan tips eksklusif.",
        status: "scheduled",
        recipients: 3200,
        sent: 0,
        delivered: 0,
        read: 0,
        failed: 0,
        createdAt: "2024-12-04",
        scheduledAt: "2024-12-10 08:00",
        sentAt: null
    },
];

const STATUS_CONFIG: Record<string, StatusConfig> = {
    draft: { label: 'Draft', variant: 'default', icon: Clock },
    scheduled: { label: 'Scheduled', variant: 'secondary', icon: Calendar },
    sent: { label: 'Sent', variant: 'outline', icon: CheckCircle },
    failed: { label: 'Failed', variant: 'destructive', icon: CheckCircle },
};

export default function CampaignBlastPage() {
    const [campaigns, setCampaigns] = useState<Campaign[]>(MOCK_CAMPAIGNS);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredCampaigns = campaigns.filter(campaign => {
        const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            campaign.message.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const totalPages = Math.ceil(filteredCampaigns.length / itemsPerPage);
    const paginatedCampaigns = filteredCampaigns.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const stats = {
        total: campaigns.length,
        draft: campaigns.filter(c => c.status === 'draft').length,
        scheduled: campaigns.filter(c => c.status === 'scheduled').length,
        sent: campaigns.filter(c => c.status === 'sent').length,
    };

    const columns: Column<Campaign>[] = [
        {
            key: 'name',
            label: 'Campaign Name',
            render: (value, row) => (
                <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{row.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">
                        {row.message}
                    </div>
                </div>
            ),
        },
        {
            key: 'status',
            label: 'Status',
            render: (value, row) => {
                const StatusIcon = STATUS_CONFIG[row.status].icon;
                return (
                    <Badge variant={STATUS_CONFIG[row.status].variant}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {STATUS_CONFIG[row.status].label}
                    </Badge>
                );
            },
        },
        {
            key: 'recipients',
            label: 'Recipients',
            render: (value, row) => (
                <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">{row.recipients.toLocaleString()}</span>
                </div>
            ),
        },
        {
            key: 'sent',
            label: 'Sent',
            render: (value, row) => (
                <div className="flex items-center gap-1">
                    <Send className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">{row.sent.toLocaleString()}</span>
                </div>
            ),
        },
        {
            key: 'delivered',
            label: 'Delivered',
            render: (value, row) => {
                const rate = row.sent > 0 ? ((row.delivered / row.sent) * 100).toFixed(1) : 0;
                return (
                    <div>
                        <div className="font-medium">{row.delivered.toLocaleString()}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{rate}%</div>
                    </div>
                );
            },
        },
        {
            key: 'read',
            label: 'Read',
            render: (value, row) => {
                const rate = row.delivered > 0 ? ((row.read / row.delivered) * 100).toFixed(1) : 0;
                return (
                    <div>
                        <div className="font-medium">{row.read.toLocaleString()}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{rate}%</div>
                    </div>
                );
            },
        },
        {
            key: 'createdAt',
            label: 'Created',
            render: (value) => {
                const date = new Date(value);
                return (
                    <div className="text-sm">
                        {date.toLocaleDateString('id-ID', { 
                            day: 'numeric', 
                            month: 'short',
                            year: 'numeric'
                        })}
                    </div>
                );
            },
        },
    ];

    const actions: ActionButton[] = [
        {
            icon: Eye,
            label: 'View Details',
            onClick: (row) => {
                console.log('View campaign:', row);
            },
        },
        {
            icon: Send,
            label: 'Send Now',
            onClick: (row) => {
                console.log('Send campaign:', row);
            },
            variant: 'outline',
        },
    ];

    return (
        <div className="flex flex-col gap-6 min-h-screen w-full bg-gray-50 dark:bg-gray-950">
            {/* Header with Action Button */}
            <div className="flex items-center justify-between">
                <div></div>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                    <Plus className="w-4 h-4" />
                    Buat Campaign Baru
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StaticData
                    title="Total Campaigns"
                    value={stats.total}
                    icon={MessageSquare}
                />
                <StaticData
                    title="Draft"
                    value={stats.draft}
                    icon={Clock}
                />
                <StaticData
                    title="Scheduled"
                    value={stats.scheduled}
                    icon={Calendar}
                />
                <StaticData
                    title="Sent"
                    value={stats.sent}
                    icon={CheckCircle}
                />
            </div>

            {/* Filters and Search */}
            <Card className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
                <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                type="search"
                                placeholder="Cari campaign..."
                                className="pl-10 border-gray-300 dark:border-gray-700"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <Button
                                variant={statusFilter === 'all' ? 'default' : 'outline'}
                                onClick={() => {
                                    setStatusFilter('all');
                                    setCurrentPage(1);
                                }}
                                className={statusFilter === 'all' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                            >
                                Semua
                            </Button>
                            <Button
                                variant={statusFilter === 'draft' ? 'default' : 'outline'}
                                onClick={() => {
                                    setStatusFilter('draft');
                                    setCurrentPage(1);
                                }}
                                className={statusFilter === 'draft' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                            >
                                Draft
                            </Button>
                            <Button
                                variant={statusFilter === 'scheduled' ? 'default' : 'outline'}
                                onClick={() => {
                                    setStatusFilter('scheduled');
                                    setCurrentPage(1);
                                }}
                                className={statusFilter === 'scheduled' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                            >
                                Scheduled
                            </Button>
                            <Button
                                variant={statusFilter === 'sent' ? 'default' : 'outline'}
                                onClick={() => {
                                    setStatusFilter('sent');
                                    setCurrentPage(1);
                                }}
                                className={statusFilter === 'sent' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                            >
                                Sent
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Campaign Table */}
            <DataTable
                data={paginatedCampaigns}
                columns={columns}
                actions={actions}
                getRowKey={(row) => row.id}
                showPagination={true}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                emptyMessage="Tidak ada campaign ditemukan"
                showCheckbox={true}
            />
        </div>
    );
}
