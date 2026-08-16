"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Trash2, Eye, Send } from "lucide-react";

export interface SavedCompanyProfile {
  id: string;
  companyName: string;
  location: string;
  style: string;
  openings: string;
  salaryScale: string;
  contractLength: string;
  repertoire: string[];
  greenLightSent?: boolean;
}

interface SavedProfilesGridProps {
  initialProfiles: SavedCompanyProfile[];
  onViewProfile?: (id: string) => void;
  onRemoveProfile?: (id: string) => void;
}

export function SavedProfilesGrid({
  initialProfiles,
  onViewProfile,
  onRemoveProfile,
}: SavedProfilesGridProps) {
  const [profiles, setProfiles] =
    React.useState<SavedCompanyProfile[]>(initialProfiles);
  const [search, setSearch] = React.useState("");

  const handleDelete = (id: string) => {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
    if (onRemoveProfile) onRemoveProfile(id);
  };

  const filteredProfiles = profiles.filter(
    (p) =>
      p.companyName.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      p.repertoire.some((item) =>
        item.toLowerCase().includes(search.toLowerCase()),
      ),
  );

  return (
    <div className="space-y-6">
      {/* Top Banner Header with Search */}
      <div className="bg-white border border-zinc-200/80 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="font-serif text-xl font-medium text-zinc-900">
          Bookmarked Company Profiles
        </h1>

        <div className="flex items-center gap-1.5 w-full sm:w-auto min-w-[320px]">
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
      </div>

      {/* Bookmarked Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => (
          <Card
            key={profile.id}
            className="border border-zinc-200/80 shadow-none rounded-none bg-white flex flex-col justify-between"
          >
            <CardHeader className="p-6 pb-4 flex flex-row items-start justify-between space-y-0">
              <div className="space-y-1">
                <CardTitle className="font-serif text-lg font-semibold text-zinc-900">
                  {profile.companyName}
                </CardTitle>
                <p className="text-xs text-zinc-400">
                  {profile.location} • {profile.style}
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => handleDelete(profile.id)}
                className="h-8 w-8 rounded-none border border-zinc-200/80 bg-zinc-50 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 shrink-0"
                title="Remove Bookmark"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </Button>
            </CardHeader>

            <CardContent className="px-6 pb-6 pt-0 space-y-5">
              {/* Details Gray Box */}
              <div className="bg-zinc-100/60 p-4 space-y-2 text-xs">
                <div className="flex justify-between items-center text-zinc-500">
                  <span>Openings:</span>
                  <span className="font-medium text-zinc-800 text-right">
                    {profile.openings}
                  </span>
                </div>
                <div className="flex justify-between items-center text-zinc-500">
                  <span>Salary Scale:</span>
                  <span className="font-medium text-zinc-800 text-right">
                    {profile.salaryScale}
                  </span>
                </div>
                <div className="flex justify-between items-center text-zinc-500">
                  <span>Contract Length:</span>
                  <span className="font-medium text-zinc-800 text-right">
                    {profile.contractLength}
                  </span>
                </div>
              </div>

              {/* Repertoire Chips */}
              <div className="flex flex-wrap gap-2">
                {profile.repertoire.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="bg-zinc-100/80 hover:bg-zinc-100 text-zinc-700 font-normal text-xs px-3 py-1 rounded-none border-none"
                  >
                    {item}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onViewProfile && onViewProfile(profile.id)}
                  className="bg-zinc-100/80 hover:bg-zinc-200/70 border-none text-zinc-800 text-xs font-medium h-9 rounded-none gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-zinc-600" />
                  View Profile
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-zinc-100/80 border-none text-zinc-800 text-xs font-medium h-9 rounded-none gap-1.5 cursor-default"
                >
                  <Send className="w-3.5 h-3.5 text-zinc-600" />
                  Green Light Sent
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProfiles.length === 0 && (
        <div className="text-center py-12 text-xs text-zinc-400 bg-white border border-zinc-200/80">
          No bookmarked company profiles found.
        </div>
      )}
    </div>
  );
}
