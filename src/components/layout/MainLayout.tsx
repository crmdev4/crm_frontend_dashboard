"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

/**
 * Main layout wrapper combining Sidebar and Header
 */
export default function MainLayout({ children, title }: MainLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isSidebarLocked, setIsSidebarLocked] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  // Determine if sidebar should be expanded
  // Sidebar is expanded if: not collapsed OR (hovered AND collapsed AND not locked)
  const isSidebarExpanded = !isSidebarCollapsed || (isSidebarHovered && isSidebarCollapsed && !isSidebarLocked);

  // Load sidebar state from localStorage on mount
  useEffect(() => {
    const savedCollapsed = localStorage.getItem('sidebarCollapsed');
    const savedLocked = localStorage.getItem('sidebarLocked');
    
    if (savedCollapsed !== null) {
      setIsSidebarCollapsed(savedCollapsed === 'true');
    }
    if (savedLocked !== null) {
      setIsSidebarLocked(savedLocked === 'true');
    }
  }, []);

  // Save sidebar state to localStorage
  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', isSidebarCollapsed.toString());
  }, [isSidebarCollapsed]);

  useEffect(() => {
    localStorage.setItem('sidebarLocked', isSidebarLocked.toString());
  }, [isSidebarLocked]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isLocked={isSidebarLocked}
        toggleLock={() => setIsSidebarLocked(!isSidebarLocked)}
        onHoverChange={setIsSidebarHovered}
      />

      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          isSidebarExpanded ? "lg:ml-64" : "lg:ml-20"
        )}
      >
        <Header title={title} />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

