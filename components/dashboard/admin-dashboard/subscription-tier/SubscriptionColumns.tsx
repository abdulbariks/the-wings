"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export type SubscriptionRow = {
  id: string;
  subscriber: string;
  planTier: string;
  price: string;
  status: "Active" | "Overdue";
  renewalDate: string;
};

export const SubscriptionColumns: ColumnDef<SubscriptionRow>[] = [
  {
    accessorKey: "subscriber",
    header: "ACCOUNT / SUBSCRIBER",
    cell: ({ row }) => (
      <div>
        <div className="font-semibold text-zinc-900">
          {row.original.subscriber}
        </div>
        <div className="text-[11px] text-zinc-400">ID: {row.original.id}</div>
      </div>
    ),
  },
  {
    accessorKey: "planTier",
    header: "PLAN TIER",
    cell: ({ row }) => (
      <span className="font-medium text-zinc-800">{row.original.planTier}</span>
    ),
  },
  {
    accessorKey: "price",
    header: "PRICE PER MONTH/YEAR",
    cell: ({ row }) => (
      <span className="font-medium text-zinc-900">{row.original.price}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge
          variant="outline"
          className={`font-normal text-[10px] px-2 py-0.5 rounded border-none ${
            status === "Active"
              ? "bg-zinc-100 text-zinc-700"
              : "bg-zinc-200 text-zinc-600"
          }`}
        >
          {status}
        </Badge>
      );
    },
  },
  { accessorKey: "renewalDate", header: "RENEWAL DATE" },
  {
    id: "actions",
    header: "ACTION",
    cell: () => (
      <Button variant="ghost" size="icon" className="h-7 w-7 text-zinc-500">
        <MoreHorizontal className="w-4 h-4" />
      </Button>
    ),
  },
];
