"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export interface Invoice {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: string;
  pdfUrl?: string;
}

export const invoiceColumns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "id",
    header: "INVOICE #",
    cell: ({ row }) => (
      <span className="font-medium text-zinc-900">{row.getValue("id")}</span>
    ),
  },
  {
    accessorKey: "date",
    header: "DATE",
    cell: ({ row }) => (
      <span className="text-zinc-600">{row.getValue("date")}</span>
    ),
  },
  {
    accessorKey: "description",
    header: "DESCRIPTION",
    cell: ({ row }) => (
      <span className="text-zinc-800 font-normal">
        {row.getValue("description")}
      </span>
    ),
  },
  {
    accessorKey: "amount",
    header: "AMOUNT",
    cell: ({ row }) => (
      <span className="text-zinc-900 font-medium">
        {row.getValue("amount")}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => (
      <span className="text-zinc-700 font-medium">
        {row.getValue("status")}
      </span>
    ),
  },
  {
    id: "receipt",
    header: "RECEIPT",
    cell: ({ row }) => {
      const invoice = row.original;
      return (
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => console.log("Download invoice:", invoice.id)}
          className="h-8 w-8 rounded-none border border-zinc-200/80 bg-white text-zinc-600 hover:bg-zinc-50"
          title="Download Receipt"
        >
          <Download className="w-3.5 h-3.5 text-zinc-700" />
        </Button>
      );
    },
  },
];
