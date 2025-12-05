"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS } from "@/helpers/constants";
import {
  Menu,
  X,
  BarChart2,
  ChevronLeft,
  ChevronRight,
  Lock,
  Unlock,
} from "lucide-react";
import { useState, useEffect } from "react";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  isLocked?: boolean;
  toggleLock?: () => void;
  onHoverChange?: (isHovered: boolean) => void;
}

/**
 * Sidebar navigation component
 */
export default function Sidebar({ 
  isCollapsed, 
  toggleSidebar,
  isLocked = false,
  toggleLock,
  onHoverChange
}: SidebarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine if sidebar should be expanded (either not collapsed, or hovered when collapsed and not locked)
  const isExpanded = !isCollapsed || (isHovered && isCollapsed && !isLocked);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange?.(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "fixed top-0 left-0 h-screen bg-background border-r border-border z-40 transition-all duration-300 ease-in-out flex flex-col",
          isExpanded ? "w-64" : "w-20",
          "lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0 w-64" : "-translate-x-full"
        )}
      >
        {/* Logo/Brand with Toggle Button */}
        <div
          className={cn(
            "h-20 flex items-center px-6 transition-all relative",
            isExpanded ? "" : "justify-center px-0"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-sm flex-shrink-0">
              <BarChart2 className="w-6 h-6" />
            </div>
            {isExpanded && (
              <div className="transition-opacity duration-200">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white leading-none">
                  FLOWQU CRM
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Enterprise
                </p>
              </div>
            )}
          </div>
          
          {/* Toggle and Lock Buttons */}
          <div className={cn(
            "absolute top-2 right-2 flex gap-1 transition-opacity duration-200",
            isExpanded ? "opacity-100" : "opacity-0"
          )}>
            {toggleLock && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLock();
                }}
                className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                title={isLocked ? "Unlock sidebar" : "Lock sidebar"}
              >
                {isLocked ? (
                  <Lock className="w-4 h-4" />
                ) : (
                  <Unlock className="w-4 h-4" />
                )}
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSidebar();
              }}
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
              title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>
          
          {/* Toggle button when collapsed (always visible) */}
          {!isExpanded && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSidebar();
              }}
              className="absolute top-2 right-2 p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors opacity-100"
              title="Expand sidebar"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav
          className={cn(
            "flex-1 py-6 px-3 scrollbar-hide",
            isCollapsed ? "overflow-visible" : "overflow-y-auto"
          )}
        >
          <ul className="space-y-1">
            {NAVIGATION_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    title={isCollapsed ? item.label : ""}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative",
                      isExpanded ? "" : "justify-center",
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5 flex-shrink-0",
                        isActive
                          ? "text-white"
                          : "text-gray-500 group-hover:text-gray-700"
                      )}
                    />
                    {isExpanded && (
                      <span className="text-sm whitespace-nowrap">
                        {item.label}
                      </span>
                    )}

                    {/* Tooltip for collapsed state */}
                    {!isExpanded && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap">
                        {item.label}
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Actions */}
        {isExpanded && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 hidden lg:flex justify-between items-center">
            {toggleLock && (
              <button
                onClick={toggleLock}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                title={isLocked ? "Unlock sidebar" : "Lock sidebar"}
              >
                {isLocked ? (
                  <Lock className="w-5 h-5" />
                ) : (
                  <Unlock className="w-5 h-5" />
                )}
              </button>
            )}
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors ml-auto"
              title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </button>
          </div>
        )}
        
        {/* Lock button when collapsed */}
        {!isExpanded && toggleLock && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 hidden lg:flex justify-center">
            <button
              onClick={toggleLock}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
              title={isLocked ? "Unlock sidebar" : "Lock sidebar"}
            >
              {isLocked ? (
                <Lock className="w-5 h-5" />
              ) : (
                <Unlock className="w-5 h-5" />
              )}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

