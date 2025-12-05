'use client';

import { useState } from 'react';
import { dealsData, type Deal } from '@/data/pipeline-data';

// TODO: Import these components when created
// import PipelineStats from '@/components/pipeline/PipelineStats';
// import KanbanBoard from '@/components/pipeline/KanbanBoard';

export default function PipelinePage() {
    const [deals, setDeals] = useState<Deal[]>(dealsData);

    return (
        <div className="flex flex-col gap-6 p-6 min-h-screen w-full bg-background/50">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Sales Pipeline</h1>
                <p className="text-muted-foreground">
                    Track your deals from lead to close. Drag and drop to update stages.
                </p>
            </div>

            {/* TODO: Add PipelineStats component */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Deals</p>
                    <p className="text-2xl font-bold">{deals.length}</p>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {/* TODO: Add KanbanBoard component */}
                <div className="border rounded-lg p-4">
                    <p className="text-muted-foreground">Kanban board will be displayed here</p>
                    <div className="mt-4 space-y-2">
                        {deals.slice(0, 5).map((deal) => (
                            <div key={deal.id} className="p-3 border rounded">
                                <h3 className="font-semibold">{deal.title}</h3>
                                <p className="text-sm text-muted-foreground">{deal.company}</p>
                                <p className="text-sm font-medium">${deal.value.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

