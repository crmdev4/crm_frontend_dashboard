'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { workflowsData, workflowTemplates, type Workflow, type WorkflowTemplate } from '@/data/automation-data';
import { Button } from '@/components/ui/button';

// TODO: Import these components when created
// import AutomationStats from '@/components/automation/AutomationStats';
// import WorkflowCard from '@/components/automation/WorkflowCard';
// import WorkflowTemplates from '@/components/automation/WorkflowTemplates';

export default function AutomationPage() {
    const [workflows, setWorkflows] = useState<Workflow[]>(workflowsData);
    const [showTemplates, setShowTemplates] = useState(true);

    const handleToggleStatus = (workflowId: string) => {
        setWorkflows(workflows.map(w =>
            w.id === workflowId
                ? { ...w, status: w.status === 'active' ? 'paused' : 'active' }
                : w
        ));
    };

    const handleUseTemplate = (template: WorkflowTemplate) => {
        console.log('Using template:', template);
        // In real app, this would open workflow builder
    };

    return (
        <div className="flex flex-col gap-6 p-6 min-h-screen w-full bg-background/50">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Automation</h1>
                        <p className="text-muted-foreground">
                            Automate repetitive tasks and save time with workflow builder
                        </p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                        <Plus className="mr-2 h-4 w-4" />
                        Create Workflow
                    </Button>
                </div>
            </div>

            {/* TODO: Add AutomationStats component */}
            {/* <AutomationStats workflows={workflows} /> */}

            {showTemplates && (
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-foreground">Workflow Templates</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {workflowTemplates.map((template) => (
                            <div key={template.id} className="p-4 border rounded-lg">
                                <h3 className="font-semibold">{template.name}</h3>
                                <p className="text-sm text-muted-foreground">{template.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground">Your Workflows</h2>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowTemplates(!showTemplates)}
                    >
                        {showTemplates ? 'Hide' : 'Show'} Templates
                    </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {workflows.map((workflow) => (
                        <div key={workflow.id} className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">{workflow.name}</h3>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleToggleStatus(workflow.id)}
                                >
                                    {workflow.status}
                                </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">{workflow.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

