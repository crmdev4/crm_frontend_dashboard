import { LucideIcon, Book, User, Settings, CreditCard, Shield, Zap } from 'lucide-react';

export interface HelpCategory {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    articleCount: number;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface PopularArticle {
    title: string;
    category: string;
    readTime: string;
}

export const helpCategories: HelpCategory[] = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        description: 'Learn the basics of setting up your account and workspace.',
        icon: Zap,
        articleCount: 5,
    },
    {
        id: 'account',
        title: 'Account & Profile',
        description: 'Manage your profile, preferences, and security settings.',
        icon: User,
        articleCount: 8,
    },
    {
        id: 'billing',
        title: 'Billing & Plans',
        description: 'Understand your subscription, invoices, and payment methods.',
        icon: CreditCard,
        articleCount: 4,
    },
    {
        id: 'features',
        title: 'Core Features',
        description: 'Deep dive into contacts, pipeline, and automation features.',
        icon: Book,
        articleCount: 12,
    },
    {
        id: 'integrations',
        title: 'Integrations',
        description: 'Connect with your favorite tools like Slack and Gmail.',
        icon: Settings,
        articleCount: 6,
    },
    {
        id: 'security',
        title: 'Privacy & Security',
        description: 'Learn how we protect your data and privacy.',
        icon: Shield,
        articleCount: 3,
    },
];

export const faqs: FAQ[] = [
    {
        question: 'How do I import contacts from CSV?',
        answer: 'Go to the Contacts page and click the "Import" button. You can drag and drop your CSV file or select it from your computer. Make sure your CSV follows the template format provided.',
    },
    {
        question: 'Can I change my subscription plan?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time from the Settings > Billing page. Changes will be reflected in your next billing cycle.',
    },
    {
        question: 'How do I invite team members?',
        answer: 'Navigate to Settings > Team and click "Invite Member". Enter their email address and select their role (Admin, Editor, or Viewer). They will receive an email invitation.',
    },
    {
        question: 'Is my data secure?',
        answer: 'We use enterprise-grade encryption for all data in transit and at rest. We are SOC 2 Type II compliant and perform regular security audits.',
    },
    {
        question: 'How do I set up email automation?',
        answer: 'Go to the Automation page and click "Create Workflow". You can start from scratch or use one of our pre-built templates like "Welcome Sequence" or "Lead Nurturing".',
    },
];

export const popularArticles: PopularArticle[] = [
    { title: 'Quick Start Guide', category: 'Getting Started', readTime: '5 min' },
    { title: 'Setting up your Pipeline', category: 'Core Features', readTime: '8 min' },
    { title: 'Connecting Gmail Integration', category: 'Integrations', readTime: '3 min' },
    { title: 'Understanding User Roles', category: 'Account & Profile', readTime: '4 min' },
];

