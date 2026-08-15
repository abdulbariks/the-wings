"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ShieldAlert, Check } from "lucide-react";

export type UserRow = {
  id: string;
  name: string;
  email: string;
  role: string;
  organization: string;
  status: "Active" | "Pending" | "Suspended";
  verified: boolean;
  joinedDate: string;
  lastActive: string;
};

export const UserColumns: ColumnDef<UserRow>[] = [
  {
    accessorKey: "name",
    header: "USER / IDENTITY",
    cell: ({ row }) => (
      <div>
        <div className="font-semibold text-zinc-900">{row.original.name}</div>
        <div className="text-[11px] text-zinc-400">{row.original.email}</div>
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: "ROLE & ORGANIZATION",
    cell: ({ row }) => (
      <div>
        <div className="font-medium text-zinc-800">{row.original.role}</div>
        <div className="text-[11px] text-zinc-400 truncate max-w-50">
          {row.original.organization}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "id",
    header: "USER ID",
    cell: ({ row }) => (
      <span className="font-mono text-[11px] text-zinc-500">
        {row.original.id}
      </span>
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
              ? "bg-emerald-50 text-emerald-700"
              : status === "Pending"
                ? "bg-zinc-100 text-zinc-600"
                : "bg-rose-50 text-rose-700"
          }`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "verified",
    header: "VERIFICATION",
    cell: ({ row }) =>
      row.original.verified ? (
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-[10px] gap-1 bg-white border-zinc-300"
        >
          <Check className="w-3 h-3 text-emerald-600" /> Verified
        </Button>
      ) : (
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-[10px] gap-1 bg-white border-zinc-300"
        >
          + Verify
        </Button>
      ),
  },
  { accessorKey: "joinedDate", header: "JOINED DATE" },
  { accessorKey: "lastActive", header: "LAST ACTIVE" },
  {
    id: "actions",
    header: "ACTION",
    cell: () => (
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-zinc-500 hover:text-zinc-900"
        >
          <Eye className="w-3.5 h-3.5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-zinc-500 hover:text-rose-600"
        >
          <ShieldAlert className="w-3.5 h-3.5" />
        </Button>
      </div>
    ),
  },
];
