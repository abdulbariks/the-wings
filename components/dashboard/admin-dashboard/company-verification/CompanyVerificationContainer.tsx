"use client";
"use no memo";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Building2 } from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { DataTablePagination } from "@/components/dashboard/reusable/DataTablePagination";

export interface VerificationCompany {
  id: string;
  companyName: string;
  registrationNumber: string;
  taxIdNumber: string;
  uploadedLicense: string;
  licenseUrl: string;
  country: string;
  status: "Pending" | "Approved" | "Rejected";
}

interface CompanyVerificationContainerProps {
  initialCompanies: VerificationCompany[];
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

const columns: ColumnDef<VerificationCompany>[] = [
  {
    accessorKey: "companyName",
    header: "Company Name",
  },
];

export function CompanyVerificationContainer({
  initialCompanies,
  onApprove,
  onReject,
}: CompanyVerificationContainerProps) {
  const [companies, setCompanies] =
    React.useState<VerificationCompany[]>(initialCompanies);
  const [activeTab, setActiveTab] = React.useState<"pending" | "history">(
    "pending",
  );
  const [search, setSearch] = React.useState("");

  const pendingCount = companies.filter((c) => c.status === "Pending").length;
  const historyCount = companies.filter((c) => c.status !== "Pending").length;

  const handleApprove = (id: string) => {
    setCompanies((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: "Approved" as const } : c,
      ),
    );
    if (onApprove) onApprove(id);
  };

  const handleReject = (id: string) => {
    setCompanies((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: "Rejected" as const } : c,
      ),
    );
    if (onReject) onReject(id);
  };

  const filteredCompanies = React.useMemo(() => {
    return companies.filter((c) => {
      const matchesTab =
        activeTab === "pending"
          ? c.status === "Pending"
          : c.status !== "Pending";

      const matchesSearch =
        c.companyName.toLowerCase().includes(search.toLowerCase()) ||
        c.registrationNumber.toLowerCase().includes(search.toLowerCase()) ||
        c.taxIdNumber.toLowerCase().includes(search.toLowerCase()) ||
        c.country.toLowerCase().includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [companies, activeTab, search]);

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: filteredCompanies,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const paginatedCompanies = table
    .getPaginationRowModel()
    .rows.map((row) => row.original);

  return (
    <div className="space-y-6">
      {/* Search & Tabs Top Bar */}
      <div className="bg-white border border-zinc-200/80 p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Left Tabs */}
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
              setActiveTab("history");
            }}
            className={`text-xs px-4 py-1.5 font-medium transition-colors ${
              activeTab === "history"
                ? "bg-zinc-900 text-white shadow-sm"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            History ({historyCount})
          </button>
        </div>

        {/* Right Search Input */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto min-w-[320px]">
          <Input
            placeholder="Search company, reg # or tax ID..."
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

      {/* Verification Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedCompanies.map((comp) => (
          <Card
            key={comp.id}
            className="border border-zinc-200/80 shadow-none rounded-none bg-white flex flex-col justify-between"
          >
            <CardHeader className="p-5 pb-4 flex flex-row items-center justify-between space-y-0 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-zinc-700 shrink-0" />
                <CardTitle className="font-serif text-base font-semibold text-zinc-900 truncate">
                  {comp.companyName}
                </CardTitle>
              </div>
              <Badge
                variant="outline"
                className="bg-zinc-100 text-zinc-600 border-none rounded-none text-[10px] font-normal px-2.5 py-1 shrink-0"
              >
                {comp.status}
              </Badge>
            </CardHeader>

            <CardContent className="p-5 space-y-4">
              {/* 2x2 Details Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {/* Registration Number */}
                <div className="bg-zinc-100/60 p-3 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                    Registration Number
                  </span>
                  <span className="font-mono font-medium text-zinc-800">
                    {comp.registrationNumber}
                  </span>
                </div>

                {/* Tax ID Number */}
                <div className="bg-zinc-100/60 p-3 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                    Tax ID Number
                  </span>
                  <span className="font-mono font-medium text-zinc-800">
                    {comp.taxIdNumber}
                  </span>
                </div>

                {/* Uploaded License */}
                <div className="bg-zinc-100/60 p-3 flex items-center justify-between gap-2 min-w-0">
                  <div className="space-y-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                      Uploaded License
                    </span>
                    <span className="font-medium text-zinc-800 truncate block">
                      {comp.uploadedLicense}
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      console.log("Downloading license:", comp.uploadedLicense)
                    }
                    className="h-7 w-7 rounded-none border-none bg-white text-zinc-600 hover:bg-zinc-200 shrink-0"
                    title="Download License"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </Button>
                </div>

                {/* Country */}
                <div className="bg-zinc-100/60 p-3 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                    Country
                  </span>
                  <span className="font-medium text-zinc-800">
                    {comp.country}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              {comp.status === "Pending" && (
                <div className="flex items-center justify-end gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleReject(comp.id)}
                    className="h-8 rounded-none border border-zinc-200/80 bg-white text-xs font-medium text-zinc-700 hover:bg-zinc-50 px-4"
                  >
                    Reject
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleApprove(comp.id)}
                    className="h-8 rounded-none border border-zinc-200/80 bg-zinc-100/80 hover:bg-zinc-200 text-xs font-medium text-zinc-900 px-4"
                  >
                    Approve
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {paginatedCompanies.length === 0 && (
        <div className="text-center py-12 text-xs text-zinc-400 bg-white border border-zinc-200/80">
          No verification requests found.
        </div>
      )}

      <DataTablePagination table={table} pageSizeOptions={[2, 4, 5, 10]} />
    </div>
  );
}
