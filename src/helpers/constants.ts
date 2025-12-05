import {
    LayoutDashboard,
    Inbox,
    Megaphone,
    Users,
    GitBranch,
    Workflow,
    BarChart3,
    Settings,
    HelpCircle,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
    id: string;
    label: string;
    href: string;
    icon: LucideIcon;
}

/**
 * Navigation menu items for the sidebar
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        id: 'unified-inbox',
        label: 'Unified Inbox',
        href: '/dashboard/inbox',
        icon: Inbox,
    },
    {
        id: 'campaign-blast',
        label: 'Campaign Blast',
        href: '/dashboard/campaign-blast',
        icon: Megaphone,
    },
    {
        id: 'contacts',
        label: 'Contacts',
        href: '/dashboard/contacts',
        icon: Users,
    },
    {
        id: 'pipeline',
        label: 'Pipeline',
        href: '/dashboard/pipeline',
        icon: GitBranch,
    },
    {
        id: 'automation',
        label: 'Automation',
        href: '/dashboard/automation',
        icon: Workflow,
    },
    {
        id: 'reports',
        label: 'Reports',
        href: '/dashboard/reports',
        icon: BarChart3,
    },
    {
        id: 'settings',
        label: 'Settings',
        href: '/dashboard/settings',
        icon: Settings,
    },
    {
        id: 'help',
        label: 'Help & Support',
        href: '/dashboard/help',
        icon: HelpCircle,
    },
];

/**
 * Status options for various entities
 */
export const STATUS_OPTIONS = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed',
} as const;

/**
 * Status color mappings
 */
export const STATUS_COLORS: Record<string, string> = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    pending: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-blue-100 text-blue-800',
    failed: 'bg-red-100 text-red-800',
};

/**
 * Chart color palette
 */
export const CHART_COLORS = {
    primary: '#1E9FD8',
    secondary: '#47B7E7',
    tertiary: '#75C9ED',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
} as const;

