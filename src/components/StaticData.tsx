"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface StaticDataProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: number;
  trendLabel?: string;
  className?: string;
}

/**
 * Reusable Static Data Card Component
 * White background with border, professional design
 */
export default function StaticData({
  title,
  value,
  icon: Icon,
  trend,
  trendLabel,
  className,
}: StaticDataProps) {
  const isPositive = trend !== undefined && trend > 0;

  return (
    <Card className={cn("bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800", className)}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/30 flex-shrink-0">
              <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-none mb-1">
              {value}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {title}
            </p>
            {trend !== undefined && (
              <div className="flex items-center gap-2 mt-1.5">
                <span
                  className={cn(
                    "text-xs font-semibold",
                    isPositive
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  )}
                >
                  {isPositive ? "+" : ""}
                  {trend}%
                </span>
                {trendLabel && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {trendLabel}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

