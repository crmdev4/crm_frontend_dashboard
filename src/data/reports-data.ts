export interface RevenueData {
    month: string;
    revenue: number;
    target: number;
}

export interface SalesByCategory {
    name: string;
    value: number;
    color: string;
}

export interface TopPerformer {
    name: string;
    deals: number;
    value: number;
}

export interface KeyMetric {
    value: number;
    change: number;
    trend: 'up' | 'down';
    label: string;
}

export interface KeyMetrics {
    totalRevenue: KeyMetric;
    activeDeals: KeyMetric;
    winRate: KeyMetric;
    avgDealSize: KeyMetric;
}

export const revenueHistory: RevenueData[] = [
    { month: 'Jan', revenue: 45000, target: 40000 },
    { month: 'Feb', revenue: 52000, target: 42000 },
    { month: 'Mar', revenue: 48000, target: 45000 },
    { month: 'Apr', revenue: 61000, target: 48000 },
    { month: 'May', revenue: 55000, target: 50000 },
    { month: 'Jun', revenue: 67000, target: 52000 },
    { month: 'Jul', revenue: 72000, target: 55000 },
    { month: 'Aug', revenue: 69000, target: 58000 },
    { month: 'Sep', revenue: 78000, target: 60000 },
    { month: 'Oct', revenue: 85000, target: 62000 },
    { month: 'Nov', revenue: 92000, target: 65000 },
    { month: 'Dec', revenue: 105000, target: 70000 },
];

export const salesByCategory: SalesByCategory[] = [
    { name: 'Enterprise', value: 450000, color: '#3b82f6' },
    { name: 'SMB', value: 280000, color: '#8b5cf6' },
    { name: 'Government', value: 150000, color: '#10b981' },
    { name: 'Startup', value: 90000, color: '#f59e0b' },
];

export const topPerformers: TopPerformer[] = [
    { name: 'Sarah Johnson', deals: 45, value: 320000 },
    { name: 'Michael Chen', deals: 38, value: 280000 },
    { name: 'Emma Rodriguez', deals: 32, value: 250000 },
    { name: 'David Miller', deals: 28, value: 210000 },
    { name: 'James Wilson', deals: 25, value: 180000 },
];

export const keyMetrics: KeyMetrics = {
    totalRevenue: {
        value: 928000,
        change: 12.5,
        trend: 'up',
        label: 'Total Revenue',
    },
    activeDeals: {
        value: 142,
        change: 8.2,
        trend: 'up',
        label: 'Active Deals',
    },
    winRate: {
        value: 64,
        change: -2.1,
        trend: 'down',
        label: 'Win Rate (%)',
    },
    avgDealSize: {
        value: 12500,
        change: 5.4,
        trend: 'up',
        label: 'Avg Deal Size',
    },
};

