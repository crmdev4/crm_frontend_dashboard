"use client";

import { Bell, ChevronDown, Globe, Command } from "lucide-react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  title?: string;
}

/**
 * Header component with cleaner styling and enhanced features
 */
export default function Header({ title = "Dashboard" }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [language, setLanguage] = useState<"ID" | "EN">("ID");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Sync state with the dark class that was set by the inline script
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ID" ? "EN" : "ID"));
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <header className="h-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-8 flex items-center justify-between sticky top-0 z-30">
      {/* Right Section */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Language Selector */}
        <button
          onClick={toggleLanguage}
          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all flex items-center gap-2"
          title="Switch Language"
        >
          <Globe className="w-5 h-5" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {language}
          </span>
        </button>

        {/* Shortcuts */}
        <button
          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all hidden md:block"
          title="Shortcuts (Cmd+K)"
        >
          <Command className="w-5 h-5" />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer hover:ring-2 hover:ring-primary-100 transition-all">
            {/* Placeholder Avatar */}
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Devkh
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

