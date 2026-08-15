"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search } from "lucide-react";

export interface MatchItem {
  id: string;
  name: string;
  role: string;
  location: string;
  initialLetter: string;
  email: string;
}

interface MatchSidebarProps {
  matches: MatchItem[];
  selectedMatchId: string;
  onSelectMatch: (id: string) => void;
}

export function MatchSidebar({
  matches,
  selectedMatchId,
  onSelectMatch,
}: MatchSidebarProps) {
  const [search, setSearch] = React.useState("");

  const filteredMatches = matches.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase()) ||
      m.location.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full lg:w-80 shrink-0 space-y-3">
      {/* Search Input Bar */}
      <div className="flex items-center gap-1.5 bg-white border border-zinc-200 p-1.5 shadow-xs">
        <Input
          placeholder="Filter matches by company, role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-8 border-none bg-zinc-50/50 text-xs text-zinc-800 focus-visible:ring-0 placeholder:text-zinc-400"
        />
        <Button
          size="icon"
          className="h-8 w-8 rounded-none bg-zinc-900 text-white hover:bg-black shrink-0"
        >
          <Search className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Match Cards List */}
      <div className="space-y-2">
        {filteredMatches.map((match) => {
          const isSelected = match.id === selectedMatchId;
          return (
            <div
              key={match.id}
              onClick={() => onSelectMatch(match.id)}
              className={`flex items-center gap-3 p-3 cursor-pointer transition-all border ${
                isSelected
                  ? "bg-zinc-200/60 border-l-4 border-l-zinc-900 border-zinc-200"
                  : "bg-zinc-100/60 border-transparent hover:bg-zinc-100/90"
              }`}
            >
              <Avatar className="h-10 w-10 rounded-none bg-white border border-zinc-200 shrink-0">
                <AvatarFallback className="rounded-none font-serif text-lg font-bold text-zinc-900">
                  {match.initialLetter}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <h4 className="font-serif text-sm font-semibold text-zinc-900 truncate">
                  {match.name}
                </h4>
                <p className="text-[11px] text-zinc-500 truncate">
                  {match.role} • {match.location}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
