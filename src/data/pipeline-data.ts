export interface PipelineStage {
    id: string;
    name: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    accentColor: string;
}

export interface Deal {
    id: string;
    title: string;
    company: string;
    value: number;
    stage: string;
    contact: string;
    probability: number;
    expectedCloseDate: string;
    createdAt: string;
    tags: string[];
}

export const pipelineStages: PipelineStage[] = [
    {
        id: 'lead',
        name: 'Lead',
        bgColor: 'bg-slate-100 dark:bg-slate-800',
        borderColor: 'border-slate-300 dark:border-slate-600',
        textColor: 'text-slate-700 dark:text-slate-300',
        accentColor: 'bg-slate-500'
    },
    {
        id: 'qualified',
        name: 'Qualified',
        bgColor: 'bg-blue-50 dark:bg-blue-950',
        borderColor: 'border-blue-300 dark:border-blue-700',
        textColor: 'text-blue-700 dark:text-blue-300',
        accentColor: 'bg-blue-500'
    },
    {
        id: 'proposal',
        name: 'Proposal',
        bgColor: 'bg-purple-50 dark:bg-purple-950',
        borderColor: 'border-purple-300 dark:border-purple-700',
        textColor: 'text-purple-700 dark:text-purple-300',
        accentColor: 'bg-purple-500'
    },
    {
        id: 'negotiation',
        name: 'Negotiation',
        bgColor: 'bg-orange-50 dark:bg-orange-950',
        borderColor: 'border-orange-300 dark:border-orange-700',
        textColor: 'text-orange-700 dark:text-orange-300',
        accentColor: 'bg-orange-500'
    },
    {
        id: 'closed-won',
        name: 'Closed Won',
        bgColor: 'bg-green-50 dark:bg-green-950',
        borderColor: 'border-green-300 dark:border-green-700',
        textColor: 'text-green-700 dark:text-green-300',
        accentColor: 'bg-green-500'
    },
    {
        id: 'closed-lost',
        name: 'Closed Lost',
        bgColor: 'bg-red-50 dark:bg-red-950',
        borderColor: 'border-red-300 dark:border-red-700',
        textColor: 'text-red-700 dark:text-red-300',
        accentColor: 'bg-red-500'
    },
];

export const dealsData: Deal[] = [
    {
        id: '1',
        title: 'Enterprise CRM Implementation',
        company: 'TechCorp Industries',
        value: 125000,
        stage: 'negotiation',
        contact: 'Sarah Johnson',
        probability: 75,
        expectedCloseDate: '2024-01-15',
        createdAt: '2023-11-01',
        tags: ['Enterprise', 'High Priority'],
    },
    {
        id: '2',
        title: 'Marketing Automation Setup',
        company: 'Digital Solutions Inc',
        value: 45000,
        stage: 'proposal',
        contact: 'Michael Chen',
        probability: 60,
        expectedCloseDate: '2024-01-20',
        createdAt: '2023-11-15',
        tags: ['Marketing', 'SaaS'],
    },
    {
        id: '3',
        title: 'Cloud Migration Project',
        company: 'Global Retail Co',
        value: 200000,
        stage: 'qualified',
        contact: 'Emma Rodriguez',
        probability: 40,
        expectedCloseDate: '2024-02-10',
        createdAt: '2023-12-01',
        tags: ['Enterprise', 'Cloud'],
    },
    {
        id: '4',
        title: 'Website Redesign',
        company: 'Creative Agency',
        value: 35000,
        stage: 'lead',
        contact: 'James Wilson',
        probability: 20,
        expectedCloseDate: '2024-02-28',
        createdAt: '2023-12-10',
        tags: ['Design', 'Web'],
    },
    {
        id: '5',
        title: 'Data Analytics Platform',
        company: 'FinTech Startup',
        value: 85000,
        stage: 'proposal',
        contact: 'Lisa Wang',
        probability: 65,
        expectedCloseDate: '2024-01-25',
        createdAt: '2023-11-20',
        tags: ['Analytics', 'FinTech'],
    },
    {
        id: '6',
        title: 'Mobile App Development',
        company: 'Healthcare Plus',
        value: 150000,
        stage: 'negotiation',
        contact: 'David Miller',
        probability: 80,
        expectedCloseDate: '2024-01-18',
        createdAt: '2023-10-15',
        tags: ['Mobile', 'Healthcare'],
    },
    {
        id: '7',
        title: 'Security Audit Services',
        company: 'Banking Corp',
        value: 95000,
        stage: 'qualified',
        contact: 'Jennifer Davis',
        probability: 50,
        expectedCloseDate: '2024-02-05',
        createdAt: '2023-11-25',
        tags: ['Security', 'Compliance'],
    },
    {
        id: '8',
        title: 'E-commerce Platform',
        company: 'Fashion Retail',
        value: 110000,
        stage: 'lead',
        contact: 'Robert Taylor',
        probability: 30,
        expectedCloseDate: '2024-03-01',
        createdAt: '2023-12-05',
        tags: ['E-commerce', 'Retail'],
    },
    {
        id: '9',
        title: 'Training & Consulting',
        company: 'Manufacturing Ltd',
        value: 25000,
        stage: 'closed-won',
        contact: 'Sophia Martinez',
        probability: 100,
        expectedCloseDate: '2023-12-20',
        createdAt: '2023-10-01',
        tags: ['Consulting', 'Training'],
    },
    {
        id: '10',
        title: 'API Integration',
        company: 'Logistics Express',
        value: 40000,
        stage: 'closed-lost',
        contact: 'William Anderson',
        probability: 0,
        expectedCloseDate: '2023-12-15',
        createdAt: '2023-09-15',
        tags: ['Integration', 'API'],
    },
];

