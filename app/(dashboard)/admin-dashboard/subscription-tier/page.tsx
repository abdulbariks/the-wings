import { DataTable } from "@/components/dashboard/reusable/DataTable";
import {
  SubscriptionColumns,
  SubscriptionRow,
} from "@/components/dashboard/admin-dashboard/subscription-tier/SubscriptionColumns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const mockSubscriptionData: SubscriptionRow[] = [
  {
    id: "SUB-1082",
    subscriber: "Paris Opéra Ballet Casting Dept",
    planTier: "Company Pro",
    price: "$1,499 / Annual",
    status: "Active",
    renewalDate: "2027-02-15 (Auto)",
  },
  {
    id: "SUB-2045",
    subscriber: "New York City Ballet HR",
    planTier: "Soloist Pass",
    price: "$2,299 / Annual",
    status: "Active",
    renewalDate: "2026-11-30 (Auto)",
  },
  {
    id: "SUB-3301",
    subscriber: "Royal Ballet London Admin",
    planTier: "Agency Annual",
    price: "$1,799 / Annual",
    status: "Active",
    renewalDate: "2027-03-10 (Manual)",
  },
  {
    id: "SUB-4457",
    subscriber: "Bolshoi Theatre Subscription",
    planTier: "Company Pro",
    price: "$2,099 / Annual",
    status: "Active",
    renewalDate: "2027-01-22 (Auto)",
  },
  {
    id: "SUB-1247",
    subscriber: "Vienna State Ballet Admin",
    planTier: "Solo Performer",
    price: "$2,199 / Annual",
    status: "Overdue",
    renewalDate: "2027-07-14 (Manual)",
  },
];

export default function SubscriptionTierPage() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen space-y-4">
      <div className="border border-zinc-200/80 shadow-none rounded-none bg-white flex items-center justify-between gap-4 p-3">
        <div className="flex items-center gap-3 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search name or id..."
              className="pl-9 h-9 text-xs bg-zinc-50/50"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500 whitespace-nowrap">
            <span>Filter by Plan:</span>
            <Select defaultValue="all">
              <SelectTrigger className="h-8 w-22.5 text-xs bg-zinc-50/50">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button variant="link" className="text-xs text-zinc-600 font-normal">
          Manage this subscriber&#39;s plan
        </Button>
      </div>

      <DataTable columns={SubscriptionColumns} data={mockSubscriptionData} />
    </div>
  );
}
