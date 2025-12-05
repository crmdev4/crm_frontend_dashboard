"use client";

import * as React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ChartType = "area" | "bar" | "line" | "pie";

interface ChartProps {
  title?: string;
  description?: string;
  data: any[];
  config: ChartConfig;
  type: ChartType;
  dataKey: string;
  height?: number;
  className?: string;
  colors?: string[];
  showGrid?: boolean;
  showLegend?: boolean;
  // For multiple data series
  dataKeys?: string[];
  // For pie chart
  nameKey?: string;
  valueKey?: string;
}

/**
 * Reusable Chart Component
 * Supports Area, Bar, Line, and Pie charts
 */
export default function Chart({
  title,
  description,
  data,
  config,
  type,
  dataKey,
  height = 300,
  className,
  colors = ["#1E9FD8", "#10B981", "#F59E0B", "#8B5CF6", "#EF4444"],
  showGrid = true,
  showLegend = false,
  dataKeys,
  nameKey = "name",
  valueKey = "value",
}: ChartProps) {
  const renderChart = () => {
    switch (type) {
      case "area":
        return (
          <AreaChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />}
            <XAxis
              dataKey={nameKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs text-gray-500"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs text-gray-500"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            {dataKeys && dataKeys.length > 0 ? (
              dataKeys.map((key, index) => (
                <Area
                  key={key}
                  dataKey={key}
                  type="natural"
                  fill={`var(--color-${key})`}
                  fillOpacity={0.4}
                  stroke={`var(--color-${key})`}
                  stackId="a"
                />
              ))
            ) : (
              <Area
                dataKey={dataKey}
                type="natural"
                fill="var(--color-primary)"
                fillOpacity={0.4}
                stroke="var(--color-primary)"
              />
            )}
          </AreaChart>
        );

      case "bar":
        return (
          <BarChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />}
            <XAxis
              dataKey={nameKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs text-gray-500"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs text-gray-500"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            {dataKeys && dataKeys.length > 0 ? (
              dataKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={`var(--color-${key})`}
                  radius={[4, 4, 0, 0]}
                />
              ))
            ) : (
              <Bar
                dataKey={dataKey}
                fill="var(--color-primary)"
                radius={[4, 4, 0, 0]}
              />
            )}
          </BarChart>
        );

      case "line":
        return (
          <LineChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />}
            <XAxis
              dataKey={nameKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs text-gray-500"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs text-gray-500"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            {dataKeys && dataKeys.length > 0 ? (
              dataKeys.map((key, index) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={`var(--color-${key})`}
                  strokeWidth={2}
                  dot={false}
                />
              ))
            ) : (
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke="var(--color-primary)"
                strokeWidth={2}
                dot={false}
              />
            )}
          </LineChart>
        );

      case "pie":
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey={valueKey}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        );

      default:
        return null;
    }
  };

  return (
    <Card className={cn("bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800", className)}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{title}</CardTitle>}
          {description && (
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      )}
      <CardContent>
        <ChartContainer config={config} className={cn("w-full", type === "pie" ? "h-[300px]" : "")}>
          {renderChart()}
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

