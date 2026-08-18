"use client";
"use no memo";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ShieldAlert } from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { DataTablePagination } from "@/components/dashboard/reusable/DataTablePagination";

export interface ModerationItem {
  id: string;
  title: string;
  author: string;
  reportId: string;
  category: string;
  contentPreview: string;
  flagReason: string;
  status: "Pending" | "Resolved";
}

interface ContentModerationContainerProps {
  initialItems: ModerationItem[];
  onRemove?: (id: string) => void;
  onWarn?: (id: string) => void;
  onApprove?: (id: string) => void;
}

export function ContentModerationContainer({
  initialItems,
  onRemove,
  onWarn,
  onApprove,
}: ContentModerationContainerProps) {
  const [items, setItems] = React.useState<ModerationItem[]>(initialItems);
  const [activeTab, setActiveTab] = React.useState<"pending" | "resolved">(
    "pending",
  );
  const [search, setSearch] = React.useState("");

  const pendingCount = items.filter((i) => i.status === "Pending").length;
  const resolvedCount = items.filter((i) => i.status === "Resolved").length;

  const handleResolveAction = (
    id: string,
    actionCallback?: (id: string) => void,
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Resolved" as const } : item,
      ),
    );
    if (actionCallback) actionCallback(id);
  };

  const filteredItems = React.useMemo(() => {
    return items.filter((item) => {
      const matchesTab =
        activeTab === "pending"
          ? item.status === "Pending"
          : item.status === "Resolved";

      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.author.toLowerCase().includes(search.toLowerCase()) ||
        item.reportId.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [items, activeTab, search]);

  const columns: ColumnDef<ModerationItem>[] = [
    {
      accessorKey: "title",
      header: "Title",
    },
  ];

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: filteredItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const paginatedItems = table
    .getPaginationRowModel()
    .rows.map((row) => row.original);

  return (
    <div className="space-y-6 font-sans">
      {/* Search & Tabs Header Bar */}
      <div className="bg-white border border-zinc-200/80 p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 bg-zinc-100/70 p-1 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => {
              setActiveTab("pending");
            }}
            className={`text-xs px-4 py-1.5 font-medium transition-colors ${
              activeTab === "pending"
                ? "bg-zinc-900 text-white shadow-sm"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Pending ({pendingCount})
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("resolved");
            }}
            className={`text-xs px-4 py-1.5 font-medium transition-colors ${
              activeTab === "resolved"
                ? "bg-zinc-900 text-white shadow-sm"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Resolved ({resolvedCount})
          </button>
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto min-w-[320px]">
          <Input
            placeholder="Search content or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 text-xs bg-zinc-50 border-zinc-200/80 rounded-none text-zinc-800 placeholder:text-zinc-400 focus-visible:ring-1 focus-visible:ring-zinc-400"
          />
          <Button
            size="icon"
            className="h-9 w-9 bg-zinc-900 text-white rounded-none hover:bg-black shrink-0"
          >
            <Search className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* Moderation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedItems.map((item) => (
          <Card
            key={item.id}
            className="border border-zinc-200/80 shadow-none rounded-none bg-white flex flex-col justify-between"
          >
            <CardHeader className="p-5 pb-4 flex flex-row items-center justify-between space-y-0 border-b border-zinc-100">
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <ShieldAlert className="w-4 h-4 text-zinc-700 shrink-0" />
                <CardTitle className="font-serif text-base font-semibold text-zinc-900 truncate">
                  {item.title}
                </CardTitle>
              </div>
              <Badge
                variant="outline"
                className="bg-zinc-100 text-zinc-600 border-none rounded-none text-[10px] font-normal px-2.5 py-1 shrink-0"
              >
                {item.status}
              </Badge>
            </CardHeader>

            <CardContent className="p-5 space-y-3">
              {/* Author Full Width Block */}
              <div className="bg-zinc-100/60 p-3 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                  Author
                </span>
                <span className="text-xs font-semibold text-zinc-900 block">
                  {item.author}
                </span>
              </div>

              {/* 2-Column Row: Report ID & Category */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-zinc-100/60 p-3 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                    Report ID
                  </span>
                  <span className="font-mono font-semibold text-zinc-800">
                    {item.reportId}
                  </span>
                </div>

                <div className="bg-zinc-100/60 p-3 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                    Category
                  </span>
                  <span className="font-medium text-zinc-800">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* 2-Column Row: Content Preview & Flag Reason */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-zinc-100/60 p-3 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                    Content Preview
                  </span>
                  <p className="text-[11px] text-zinc-700 leading-relaxed font-normal">
                    {item.contentPreview}
                  </p>
                </div>

                <div className="bg-zinc-100/60 p-3 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                    Flag Reason
                  </span>
                  <p className="text-[11px] text-zinc-700 leading-relaxed font-normal">
                    {item.flagReason}
                  </p>
                </div>
              </div>

              {/* Moderation Actions */}
              {item.status === "Pending" && (
                <div className="flex items-center justify-end gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleResolveAction(item.id, onRemove)}
                    className="h-8 rounded-none border border-zinc-200/80 bg-white text-xs font-medium text-zinc-700 hover:bg-zinc-50 px-3"
                  >
                    Remove content
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleResolveAction(item.id, onWarn)}
                    className="h-8 rounded-none border border-zinc-200/80 bg-white text-xs font-medium text-zinc-700 hover:bg-zinc-50 px-3"
                  >
                    Warn Author
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleResolveAction(item.id, onApprove)}
                    className="h-8 rounded-none border border-zinc-200/80 bg-zinc-100/80 hover:bg-zinc-200 text-xs font-medium text-zinc-900 px-3"
                  >
                    Approve (Keep)
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {paginatedItems.length === 0 && (
        <div className="text-center py-12 text-xs text-zinc-400 bg-white border border-zinc-200/80">
          No moderation reports found.
        </div>
      )}

      <DataTablePagination table={table} pageSizeOptions={[2, 4, 5, 10]} />
    </div>
  );
}
