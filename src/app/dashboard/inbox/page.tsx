"use client";

import InboxLayout from "@/components/dashboard/inbox/InboxLayout";

export default function InboxPage() {
  return (
    <div className="h-[calc(100vh-80px)] w-full bg-gray-50 dark:bg-gray-950 -m-6 p-4">
      <InboxLayout />
    </div>
  );
}
