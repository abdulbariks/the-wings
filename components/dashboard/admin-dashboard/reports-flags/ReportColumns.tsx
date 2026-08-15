"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye } from "lucide-react";

export type ReportRow = {
  id: string;
  reportFrom: string;
  category: string;
  priority: "High" | "Medium" | "Low";
  reporter: string;
  handledBy: string;
  status: "Open" | "Under Review" | "Resolved";
};

export const reportColumns: ColumnDef<ReportRow>[] = [
  {
    accessorKey: "reportFrom",
    header: "REPORT FROM",
    cell: ({ row }) => (
      <span className="font-medium text-zinc-900">
        {row.original.reportFrom}
      </span>
    ),
  },
  { accessorKey: "category", header: "CATEGORY" },
  {
    accessorKey: "priority",
    header: "PRIORITY",
    cell: ({ row }) => {
      const priority = row.original.priority;
      return (
        <Badge
          className={`font-mono text-[10px] px-2 py-0.5 rounded border-none uppercase ${
            priority === "High"
              ? "bg-black text-white"
              : priority === "Medium"
                ? "bg-zinc-800 text-white"
                : "bg-zinc-400 text-white"
          }`}
        >
          {priority}
        </Badge>
      );
    },
  },
  { accessorKey: "reporter", header: "REPORTER" },
  {
    accessorKey: "handledBy",
    header: "HANDLED BY",
    cell: ({ row }) => (
      <Select defaultValue={row.original.handledBy}>
        <SelectTrigger className="h-7 w-40 text-xs bg-zinc-100/60 border-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="M. Vane (Compliance)" className="text-xs">
            M. Vane (Compliance)
          </SelectItem>
          <SelectItem value="S. Moreau (Legal)" className="text-xs">
            S. Moreau (Legal)
          </SelectItem>
          <SelectItem value="Billing System" className="text-xs">
            Billing System
          </SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => (
      <span className="text-xs text-zinc-600 font-medium">
        {row.original.status}
      </span>
    ),
  },
  {
    id: "actions",
    header: "ACTIONS",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-7 w-7 text-zinc-500">
          <Eye className="w-3.5 h-3.5" />
        </Button>
        {row.original.status !== "Resolved" && (
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-[10px] bg-white border-zinc-300"
          >
            Resolve
          </Button>
        )}
      </div>
    ),
  },
];
