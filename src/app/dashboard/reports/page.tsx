'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { revenueHistory, salesByCategory, topPerformers, keyMetrics } from '@/data/reports-data';

// TODO: Import these components when created
// import ReportStats from '@/components/reports/ReportStats';
// import RevenueChart from '@/components/reports/RevenueChart';
// import CategoryDistribution from '@/components/reports/CategoryDistribution';
// import TopPerformers from '@/components/reports/TopPerformers';

export default function ReportsPage() {
    return (
        <div className="flex flex-col gap-6 p-6 min-h-screen w-full bg-background/50">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
                        <p className="text-muted-foreground">
                            Deep dive into your business performance and growth metrics.
                        </p>
                    </div>
                    <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Export Report
                    </Button>
                </div>
            </div>

            {/* TODO: Add ReportStats component */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold">${keyMetrics.totalRevenue.value.toLocaleString()}</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Active Deals</p>
                    <p className="text-2xl font-bold">{keyMetrics.activeDeals.value}</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Win Rate</p>
                    <p className="text-2xl font-bold">{keyMetrics.winRate.value}%</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Avg Deal Size</p>
                    <p className="text-2xl font-bold">${keyMetrics.avgDealSize.value.toLocaleString()}</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 border rounded-lg p-6">
                    {/* TODO: Add RevenueChart component */}
                    <h3 className="font-semibold mb-4">Revenue History</h3>
                    <p className="text-sm text-muted-foreground">Chart will be displayed here</p>
                </div>
                <div className="col-span-3 border rounded-lg p-6">
                    {/* TODO: Add CategoryDistribution component */}
                    <h3 className="font-semibold mb-4">Sales by Category</h3>
                    <p className="text-sm text-muted-foreground">Chart will be displayed here</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-3 border rounded-lg p-6">
                    {/* TODO: Add TopPerformers component */}
                    <h3 className="font-semibold mb-4">Top Performers</h3>
                    <div className="space-y-2">
                        {topPerformers.map((performer, idx) => (
                            <div key={idx} className="flex justify-between">
                                <span>{performer.name}</span>
                                <span className="font-medium">${performer.value.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-4 bg-card border border-border rounded-lg p-6 shadow-sm flex items-center justify-center text-muted-foreground text-sm">
                    More insights coming soon...
                </div>
            </div>
        </div>
    );
}

