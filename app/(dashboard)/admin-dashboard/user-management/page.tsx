import { DataTable } from "@/components/dashboard/reusable/DataTable";
import {
  UserColumns,
  UserRow,
} from "@/components/dashboard/admin-dashboard/user-management/UserColumns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, Download } from "lucide-react";

const mockUserData: UserRow[] = [
  {
    id: "US-8012",
    name: "Astrid Lindholm",
    email: "a.lindholm@royalballet.se",
    role: "Company Director",
    organization: "Royal Swedish Ballet (First Soloist)",
    status: "Active",
    verified: true,
    joinedDate: "2025-11-14",
    lastActive: "12 mins ago",
  },
  {
    id: "US-8013",
    name: "Björn Eriksson",
    email: "b.eriksson@royalballet.se",
    role: "Company Director",
    organization: "Artistic Director at National Dance T...",
    status: "Pending",
    verified: true,
    joinedDate: "2025-10-30",
    lastActive: "5 mins ago",
  },
  {
    id: "US-8014",
    name: "Camilla Sundqvist",
    email: "c.sundqvist@royalballet.se",
    role: "Dancer",
    organization: "Principal Performer at Bolshoi Ballet",
    status: "Active",
    verified: true,
    joinedDate: "2025-12-01",
    lastActive: "22 mins ago",
  },
  {
    id: "US-8015",
    name: "David Holmgren",
    email: "d.holmgren@royalballet.se",
    role: "Creative Professionals",
    organization: "Talent Scout for Broadway Productio...",
    status: "Active",
    verified: true,
    joinedDate: "2025-11-10",
    lastActive: "33 mins ago",
  },
  {
    id: "US-8016",
    name: "Elisabeth Nyström",
    email: "e.nystrom@royalballet.se",
    role: "Company Director",
    organization: "CEO of Contemporary Dance Collect...",
    status: "Suspended",
    verified: false,
    joinedDate: "2025-11-15",
    lastActive: "15 mins ago",
  },
  {
    id: "US-8012",
    name: "Astrid Lindholm",
    email: "a.lindholm@royalballet.se",
    role: "Company Director",
    organization: "Royal Swedish Ballet (First Soloist)",
    status: "Active",
    verified: true,
    joinedDate: "2025-11-14",
    lastActive: "12 mins ago",
  },
  {
    id: "US-8013",
    name: "Björn Eriksson",
    email: "b.eriksson@royalballet.se",
    role: "Company Director",
    organization: "Artistic Director at National Dance T...",
    status: "Pending",
    verified: true,
    joinedDate: "2025-10-30",
    lastActive: "5 mins ago",
  },
  {
    id: "US-8014",
    name: "Camilla Sundqvist",
    email: "c.sundqvist@royalballet.se",
    role: "Dancer",
    organization: "Principal Performer at Bolshoi Ballet",
    status: "Suspended",
    verified: true,
    joinedDate: "2025-12-01",
    lastActive: "22 mins ago",
  },
  {
    id: "US-8015",
    name: "David Holmgren",
    email: "d.holmgren@royalballet.se",
    role: "Creative Professionals",
    organization: "Talent Scout for Broadway Productio...",
    status: "Active",
    verified: false,
    joinedDate: "2025-11-10",
    lastActive: "33 mins ago",
  },
  {
    id: "US-8016",
    name: "Elisabeth Nyström",
    email: "e.nystrom@royalballet.se",
    role: "Company Director",
    organization: "CEO of Contemporary Dance Collect...",
    status: "Suspended",
    verified: false,
    joinedDate: "2025-11-15",
    lastActive: "15 mins ago",
  },
];

export default function UserManagementPage() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen space-y-4">
      <div className="border border-zinc-200/80 shadow-none rounded-none bg-white flex items-center justify-between gap-4 p-3 ">
        <div className="flex items-center gap-3 flex-1 max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search by name, email, affiliation, or USR ID..."
              className="pl-9 h-9 text-xs bg-zinc-50/50"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500 whitespace-nowrap">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Role:</span>
            <Select defaultValue="all">
              <SelectTrigger className="h-8 w-27.5 text-xs bg-zinc-50/50">
                <SelectValue placeholder="All Roles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500 whitespace-nowrap">
            <span>Status:</span>
            <Select defaultValue="all">
              <SelectTrigger className="h-8 w-27.5 text-xs bg-zinc-50/50">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5">
          <Download className="w-3.5 h-3.5" /> Export
        </Button>
      </div>

      <DataTable columns={UserColumns} data={mockUserData} />
    </div>
  );
}
