'use client';

import { useState } from 'react';
import { contactsData, type Contact } from '@/data/contacts-data';

// TODO: Import these components when created
// import ContactStats from '@/components/contacts/ContactStats';
// import ContactFilters from '@/components/contacts/ContactFilters';
// import ContactTable from '@/components/contacts/ContactTable';
// import AddContactModal from '@/components/contacts/AddContactModal';
// import ImportContactModal from '@/components/contacts/ImportContactModal';

export default function ContactsPage() {
    const [contacts, setContacts] = useState<Contact[]>(contactsData);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);

    // Filter contacts
    const filteredContacts = contacts.filter((contact) => {
        const matchesSearch =
            contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.company.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    // Calculate stats
    const stats = {
        total: contacts.length,
        active: contacts.filter(c => c.status === 'Active').length,
        newLeads: contacts.filter(c => c.status === 'Lead').length,
    };

    const handleAddContact = () => {
        // In a real app, this would send data to API
        // For now, we'll just close the modal
        setIsAddModalOpen(false);
    };

    const handleImportContacts = () => {
        // Simulation
        setIsImportModalOpen(false);
    };

    return (
        <div className="flex flex-col gap-6 p-6 min-h-screen w-full bg-background/50">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
                <p className="text-muted-foreground">
                    Manage your customer database, filter by status, and track engagement.
                </p>
            </div>

            {/* TODO: Add ContactStats component */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Contacts</p>
                    <p className="text-2xl font-bold">{stats.total}</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Active</p>
                    <p className="text-2xl font-bold">{stats.active}</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">New Leads</p>
                    <p className="text-2xl font-bold">{stats.newLeads}</p>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {/* TODO: Add ContactFilters component */}
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Search contacts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* TODO: Add ContactTable component */}
                <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-muted">
                            <tr>
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Email</th>
                                <th className="p-4 text-left">Company</th>
                                <th className="p-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredContacts.map((contact) => (
                                <tr key={contact.id} className="border-t">
                                    <td className="p-4">{contact.name}</td>
                                    <td className="p-4">{contact.email}</td>
                                    <td className="p-4">{contact.company}</td>
                                    <td className="p-4">{contact.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* TODO: Add modals */}
        </div>
    );
}

