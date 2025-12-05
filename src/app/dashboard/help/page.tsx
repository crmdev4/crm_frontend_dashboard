'use client';

import { helpCategories, faqs } from '@/data/help-data';

// TODO: Import these components when created
// import HelpSearch from '@/components/help/HelpSearch';
// import DocCategories from '@/components/help/DocCategories';
// import FAQSection from '@/components/help/FAQSection';
// import ContactSupport from '@/components/help/ContactSupport';

export default function HelpPage() {
    return (
        <div className="flex flex-col gap-12 p-6 min-h-screen w-full bg-background/50 max-w-7xl mx-auto">
            {/* TODO: Add HelpSearch component */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
                <input
                    type="text"
                    placeholder="Search for help..."
                    className="w-full px-4 py-3 border rounded-lg"
                />
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Browse by Topic</h2>
                {/* TODO: Add DocCategories component */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {helpCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div key={category.id} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                                <Icon className="w-8 h-8 mb-3 text-primary" />
                                <h3 className="font-semibold mb-2">{category.title}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                                <p className="text-xs text-muted-foreground">{category.articleCount} articles</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* TODO: Add FAQSection component */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="p-4 border rounded-lg">
                            <h3 className="font-semibold mb-2">{faq.question}</h3>
                            <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* TODO: Add ContactSupport component */}
            <div className="p-6 border rounded-lg text-center">
                <h3 className="font-semibold mb-2">Still need help?</h3>
                <p className="text-sm text-muted-foreground mb-4">Contact our support team</p>
                <button className="px-4 py-2 bg-primary text-white rounded-lg">Contact Support</button>
            </div>
        </div>
    );
}

