"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export interface Column<T = any> {
  key: string;
  label: string;
  render?: (value: any, row: T, index: number) => React.ReactNode;
  className?: string;
  headerClassName?: string;
}

export interface ActionButton {
  icon: LucideIcon;
  label?: string;
  onClick: (row: any) => void;
  variant?: "default" | "ghost" | "outline";
  className?: string;
}

interface DataTableProps<T = any> {
  data: T[];
  columns: Column<T>[];
  actions?: ActionButton[];
  showCheckbox?: boolean;
  onSelectAll?: (checked: boolean) => void;
  onSelectRow?: (row: T, checked: boolean) => void;
  selectedRows?: T[];
  className?: string;
  emptyMessage?: string;
  showPagination?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  getRowKey?: (row: T, index?: number) => string | number;
  maxHeight?: string;
}

/**
 * Reusable DataTable Component
 * Professional table with actions, checkboxes, and pagination
 */
export default function DataTable<T = any>({
  data,
  columns,
  actions = [],
  showCheckbox = false,
  onSelectAll,
  onSelectRow,
  selectedRows = [],
  className,
  emptyMessage = "No data available",
  showPagination = false,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  getRowKey,
  maxHeight = "calc(100vh - 400px)",
}: DataTableProps<T>) {
  const isRowSelected = (row: T, index: number) => {
    if (!getRowKey) return false;
    const rowKey = getRowKey(row, index);
    return selectedRows.some((selected) => {
      // Find index of selected row in original data
      const selectedIndex = data.findIndex((r) => r === selected);
      const selectedKey = getRowKey(selected, selectedIndex >= 0 ? selectedIndex : 0);
      return selectedKey === rowKey;
    });
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelectAll?.(e.target.checked);
  };

  const handleSelectRow = (row: T, e: React.ChangeEvent<HTMLInputElement>) => {
    onSelectRow?.(row, e.target.checked);
  };

  return (
    <Card 
      className={cn(
        "bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col",
        "max-h-[calc(100vh-300px)] sm:max-h-[calc(100vh-350px)] lg:max-h-[calc(100vh-400px)]",
        className
      )}
      style={maxHeight !== "calc(100vh - 400px)" ? { maxHeight } : undefined}
    >
      <div className="flex-1 flex flex-col min-h-0 h-full">
        {/* Table Header - Sticky */}
        <div className="overflow-x-auto flex-shrink-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900">
                {showCheckbox && (
                  <TableHead className="w-12 px-6">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      onChange={handleSelectAll}
                      checked={selectedRows.length === data.length && data.length > 0}
                    />
                  </TableHead>
                )}
                {columns.map((column) => (
                  <TableHead
                    key={column.key}
                    className={cn(
                      "text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-6",
                      column.headerClassName
                    )}
                  >
                    {column.label}
                  </TableHead>
                ))}
                {actions.length > 0 && (
                  <TableHead className="text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-6">
                    Actions
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Table Body - Scrollable */}
        <div className="flex-1 overflow-y-auto overflow-x-auto min-h-0">
          <Table>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + (showCheckbox ? 1 : 0) + (actions.length > 0 ? 1 : 0)}
                    className="text-center py-12 text-gray-500 dark:text-gray-400 px-6"
                  >
                    {emptyMessage}
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, index) => {
                  const rowKey = getRowKey ? getRowKey(row, index) : index;
                  const isSelected = isRowSelected(row, index);

                  return (
                    <TableRow
                      key={rowKey}
                      className={cn(
                        "border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group",
                        isSelected && "bg-blue-50 dark:bg-blue-950/20"
                      )}
                    >
                      {showCheckbox && (
                        <TableCell className="px-6">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            checked={isSelected}
                            onChange={(e) => handleSelectRow(row, e)}
                          />
                        </TableCell>
                      )}
                      {columns.map((column) => (
                        <TableCell
                          key={column.key}
                          className={cn("text-sm px-6", column.className)}
                        >
                          {column.render
                            ? column.render((row as any)[column.key], row, index)
                            : String((row as any)[column.key] || "-")}
                        </TableCell>
                      ))}
                      {actions.length > 0 && (
                        <TableCell className="text-right px-6">
                          <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {actions.map((action, actionIndex) => {
                              const ActionIcon = action.icon;
                              return (
                                <Button
                                  key={actionIndex}
                                  variant={action.variant || "ghost"}
                                  size="icon"
                                  className={cn(
                                    "h-8 w-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                                    action.className
                                  )}
                                  onClick={() => action.onClick(row)}
                                  title={action.label}
                                >
                                  <ActionIcon className="w-4 h-4" />
                                </Button>
                              );
                            })}
                          </div>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {showPagination && data.length > 0 && (
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) onPageChange?.(currentPage - 1);
                  }}
                  className={cn(
                    currentPage === 1 && "pointer-events-none opacity-50"
                  )}
                />
              </PaginationItem>
              
              {/* Page Numbers */}
              {(() => {
                const pages: (number | 'ellipsis')[] = [];
                
                if (totalPages <= 7) {
                  // Show all pages if 7 or fewer
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                  }
                } else {
                  // Always show first page
                  pages.push(1);
                  
                  if (currentPage > 3) {
                    pages.push('ellipsis');
                  }
                  
                  // Show pages around current
                  const start = Math.max(2, currentPage - 1);
                  const end = Math.min(totalPages - 1, currentPage + 1);
                  
                  for (let i = start; i <= end; i++) {
                    if (i !== 1 && i !== totalPages) {
                      pages.push(i);
                    }
                  }
                  
                  if (currentPage < totalPages - 2) {
                    pages.push('ellipsis');
                  }
                  
                  // Always show last page
                  if (totalPages > 1) {
                    pages.push(totalPages);
                  }
                }
                
                return pages.map((page, index) => {
                  if (page === 'ellipsis') {
                    return (
                      <PaginationItem key={`ellipsis-${index}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          onPageChange?.(page);
                        }}
                        isActive={page === currentPage}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                });
              })()}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) onPageChange?.(currentPage + 1);
                  }}
                  className={cn(
                    currentPage === totalPages && "pointer-events-none opacity-50"
                  )}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </Card>
  );
}

