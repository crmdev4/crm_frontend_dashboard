export interface WorkflowTemplate {
    id: string;
    name: string;
    description: string;
    icon: string;
    category: string;
    trigger: string;
    actions: string[];
    color: string;
}

export interface Workflow {
    id: string;
    name: string;
    description: string;
    trigger: string;
    actions: string[];
    status: 'active' | 'paused';
    runs: number;
    successRate: number;
    lastRun: string;
    createdAt: string;
    category: string;
}

export const workflowTemplates: WorkflowTemplate[] = [
    {
        id: 'template-1',
        name: 'Welcome New Contacts',
        description: 'Automatically send welcome email when a new contact is added',
        icon: 'Mail',
        category: 'Email',
        trigger: 'Contact Created',
        actions: ['Send Email', 'Add to List'],
        color: 'bg-blue-500',
    },
    {
        id: 'template-2',
        name: 'Lead Scoring',
        description: 'Automatically score leads based on engagement and activity',
        icon: 'Star',
        category: 'Sales',
        trigger: 'Contact Activity',
        actions: ['Update Score', 'Notify Team'],
        color: 'bg-purple-500',
    },
    {
        id: 'template-3',
        name: 'Follow-up Reminder',
        description: 'Send reminder to sales team for follow-up after X days',
        icon: 'Bell',
        category: 'Sales',
        trigger: 'Time-based',
        actions: ['Send Notification', 'Create Task'],
        color: 'bg-orange-500',
    },
    {
        id: 'template-4',
        name: 'Deal Stage Change',
        description: 'Notify team when deal moves to new stage',
        icon: 'TrendingUp',
        category: 'Pipeline',
        trigger: 'Deal Updated',
        actions: ['Send Notification', 'Update CRM'],
        color: 'bg-green-500',
    },
    {
        id: 'template-5',
        name: 'Abandoned Cart',
        description: 'Send reminder email for abandoned shopping carts',
        icon: 'ShoppingCart',
        category: 'E-commerce',
        trigger: 'Cart Abandoned',
        actions: ['Send Email', 'Offer Discount'],
        color: 'bg-red-500',
    },
    {
        id: 'template-6',
        name: 'Task Assignment',
        description: 'Automatically assign tasks based on deal value',
        icon: 'CheckSquare',
        category: 'Productivity',
        trigger: 'Deal Created',
        actions: ['Create Task', 'Assign User'],
        color: 'bg-indigo-500',
    },
];

export const workflowsData: Workflow[] = [
    {
        id: '1',
        name: 'Welcome Email Sequence',
        description: 'Send 3-part welcome email series to new subscribers',
        trigger: 'Contact subscribed to newsletter',
        actions: [
            'Wait 1 hour',
            'Send welcome email',
            'Wait 2 days',
            'Send tips email',
            'Wait 5 days',
            'Send resources email',
        ],
        status: 'active',
        runs: 1247,
        successRate: 94,
        lastRun: '2024-01-04T10:30:00Z',
        createdAt: '2023-10-15',
        category: 'Email',
    },
    {
        id: '2',
        name: 'Hot Lead Notification',
        description: 'Notify sales team when lead score exceeds 80',
        trigger: 'Lead score updated',
        actions: [
            'Check if score > 80',
            'Send Slack notification',
            'Create high-priority task',
            'Add to hot leads list',
        ],
        status: 'active',
        runs: 342,
        successRate: 98,
        lastRun: '2024-01-04T09:15:00Z',
        createdAt: '2023-11-01',
        category: 'Sales',
    },
    {
        id: '3',
        name: 'Deal Won Celebration',
        description: 'Celebrate with team when deal is closed',
        trigger: 'Deal stage changed to Closed Won',
        actions: [
            'Send team notification',
            'Update dashboard',
            'Send thank you email to customer',
            'Create onboarding task',
        ],
        status: 'active',
        runs: 89,
        successRate: 100,
        lastRun: '2024-01-03T16:45:00Z',
        createdAt: '2023-09-20',
        category: 'Pipeline',
    },
    {
        id: '4',
        name: 'Inactive Contact Re-engagement',
        description: 'Re-engage contacts who haven\'t opened emails in 30 days',
        trigger: 'Scheduled - Daily at 9 AM',
        actions: [
            'Find inactive contacts',
            'Send re-engagement email',
            'Wait 7 days',
            'Remove if still inactive',
        ],
        status: 'paused',
        runs: 2156,
        successRate: 67,
        lastRun: '2024-01-01T09:00:00Z',
        createdAt: '2023-08-10',
        category: 'Email',
    },
    {
        id: '5',
        name: 'Meeting Reminder',
        description: 'Send reminder 1 hour before scheduled meetings',
        trigger: 'Meeting scheduled',
        actions: [
            'Wait until 1 hour before',
            'Send email reminder',
            'Send SMS reminder',
            'Update calendar',
        ],
        status: 'active',
        runs: 567,
        successRate: 96,
        lastRun: '2024-01-04T08:00:00Z',
        createdAt: '2023-12-01',
        category: 'Productivity',
    },
    {
        id: '6',
        name: 'Weekly Report Generation',
        description: 'Generate and send weekly performance report',
        trigger: 'Scheduled - Every Monday at 8 AM',
        actions: [
            'Collect data from last week',
            'Generate PDF report',
            'Send to management',
            'Archive report',
        ],
        status: 'active',
        runs: 16,
        successRate: 100,
        lastRun: '2024-01-01T08:00:00Z',
        createdAt: '2023-10-01',
        category: 'Reporting',
    },
];

