"use client";

import * as React from "react";
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
import { CompanyCard, CompanyData } from "./CompanyCard";

interface BrowseCompaniesContainerProps {
  initialCompanies: CompanyData[];
  onViewProfile?: (id: string) => void;
}

export function BrowseCompaniesContainer({
  initialCompanies,
  onViewProfile,
}: BrowseCompaniesContainerProps) {
  const [companies, setCompanies] =
    React.useState<CompanyData[]>(initialCompanies);
  const [search, setSearch] = React.useState("");
  const [selectedLocation, setSelectedLocation] = React.useState("all");

  // Extract unique locations for the dropdown
  const locations = React.useMemo(() => {
    const set = new Set(
      companies.map((c) => c.location.split(",")[1]?.trim() || c.location),
    );
    return Array.from(set);
  }, [companies]);

  const handleToggleBookmark = (id: string) => {
    setCompanies((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, isBookmarked: !c.isBookmarked } : c,
      ),
    );
  };

  const handleToggleGreenLight = (id: string) => {
    setCompanies((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, greenLightSent: !c.greenLightSent } : c,
      ),
    );
  };

  const filteredCompanies = companies.filter((c) => {
    const matchesSearch =
      c.companyName.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase()) ||
      c.repertoire.some((r) => r.toLowerCase().includes(search.toLowerCase()));

    const matchesLocation =
      selectedLocation === "all" ||
      c.location.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="space-y-6">
      {/* Search & Location Filter Banner */}
      <div className="bg-white border border-zinc-200/80 p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Left Search Input */}
        <div className="flex items-center gap-1.5 w-full sm:max-w-md">
          <Input
            placeholder="Search by company name, location, or repertoire..."
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

        {/* Right Location Filter */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <span className="text-xs text-zinc-500 font-medium">Filter:</span>
          <Select
            value={selectedLocation}
            onValueChange={(val) => setSelectedLocation(val as string)}
          >
            <SelectTrigger className="h-9 w-40 text-xs bg-zinc-50 border-zinc-200/80 rounded-none text-zinc-800 focus:ring-1 focus:ring-zinc-400">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent className="rounded-none text-xs">
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid of Company Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            onToggleBookmark={handleToggleBookmark}
            onToggleGreenLight={handleToggleGreenLight}
            onViewProfile={onViewProfile}
          />
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="text-center py-12 text-xs text-zinc-400 bg-white border border-zinc-200/80">
          No companies found matching your criteria.
        </div>
      )}
    </div>
  );
}
