import { DataTable } from "@/components/dashboard/reusable/DataTable";
import {
  reportColumns,
  ReportRow,
} from "@/components/dashboard/admin-dashboard/reports-flags/ReportColumns";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const mockReportsData: ReportRow[] = [
  {
    id: "FLG-101",
    reportFrom: "Neumeier Ballet Institute",
    category: "Unsafe Audition",
    priority: "High",
    reporter: "Liam O'Sullivan",
    handledBy: "M. Vane (Compliance)",
    status: "Open",
  },
  {
    id: "FLG-102",
    reportFrom: "Marconi Dance Academy",
    category: "Late Payment Issue",
    priority: "Low",
    reporter: "Nina Kovalenko",
    handledBy: "S. Moreau (Legal)",
    status: "Resolved",
  },
  {
    id: "FLG-103",
    reportFrom: "Sapphire Theater Group",
    category: "Safety Protocol Update",
    priority: "Medium",
    reporter: "La Scala Legal Counsel",
    handledBy: "Billing System",
    status: "Open",
  },
  {
    id: "FLG-104",
    reportFrom: "Lyric Arts Studio",
    category: "Equipment Maintenance Del",
    priority: "Low",
    reporter: "Elena Rostova",
    handledBy: "S. Moreau (Legal)",
    status: "Under Review",
  },
  {
    id: "FLG-105",
    reportFrom: "Crescent City Ballet",
    category: "Contract Dispute",
    priority: "High",
    reporter: "Javier Montoya",
    handledBy: "Billing System",
    status: "Open",
  },
];

export default function ReportsFlagsPage() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen space-y-4">
      <div className="border border-zinc-200/80 shadow-none rounded-none bg-white flex items-center justify-between gap-4 p-3">
        <div className="flex items-center gap-3 flex-1 max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search reports by FLG ID, target title, reporter..."
              className="pl-9 h-9 text-xs bg-zinc-50/50"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500 whitespace-nowrap">
            <span>Severity:</span>
            <Select defaultValue="all">
              <SelectTrigger className="h-8 w-27.5 text-xs bg-zinc-50/50">
                <SelectValue placeholder="All Severities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500 whitespace-nowrap">
            <span>Type:</span>
            <Select defaultValue="all">
              <SelectTrigger className="h-8 w-25 text-xs bg-zinc-50/50">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <span className="text-xs font-semibold text-zinc-700">
          4 Reports Need Attention
        </span>
      </div>

      <DataTable columns={reportColumns} data={mockReportsData} />
    </div>
  );
}
