"use client";

import { useState } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import CustomerDetail from "./CustomerDetail";

export default function InboxLayout() {
  const [selectedChatId, setSelectedChatId] = useState<number | undefined>(1);

  return (
    <div className="grid grid-cols-12 h-full bg-gray-50 dark:bg-gray-950 gap-4">
      {/* Left Column: Chat List */}
      <div className="col-span-3 h-full overflow-hidden">
        <ChatList
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
        />
      </div>

      {/* Middle Column: Chat Window */}
      <div className="col-span-6 h-full overflow-hidden">
        <ChatWindow chatId={selectedChatId} />
      </div>

      {/* Right Column: Customer Detail */}
      <div className="col-span-3 h-full overflow-hidden">
        <CustomerDetail chatId={selectedChatId} />
      </div>
    </div>
  );
}
