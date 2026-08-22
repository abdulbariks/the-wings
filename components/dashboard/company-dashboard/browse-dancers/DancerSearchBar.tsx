'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Bookmark, ArrowLeft } from 'lucide-react';

interface DancerSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isShortlistPage?: boolean;
  title?: string;
}

export function DancerSearchBar({
  searchQuery,
  onSearchChange,
  isShortlistPage = false,
  title,
}: DancerSearchBarProps) {
  return (
    <Card className="border border-zinc-200/80 shadow-none rounded-none bg-[#f8f8f8] p-3 flex flex-col sm:flex-row items-center justify-between gap-4">
      {isShortlistPage ? (
        <div className="flex items-center gap-2">
          <Link
            href="/company-dashboard/browse-dancers"
            className="inline-flex items-center gap-2 text-sm font-serif font-medium text-zinc-900 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-700" />
            {title || 'My Saved Talent Shortlist'}
          </Link>
        </div>
      ) : (
        <div className="w-full sm:w-80 relative flex items-center">
          <Input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search dancers by rank, height, repertoire..."
            className="h-9 text-xs bg-[#f0f0f0] border-none rounded-none text-zinc-900 pr-10 focus-visible:ring-1 focus-visible:ring-zinc-400 placeholder:text-zinc-400"
          />
          <div className="absolute right-0 top-0 h-9 w-9 bg-[#1c1e22] flex items-center justify-center shrink-0">
            <Search className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      )}

      {isShortlistPage ? (
        <div className="w-full sm:w-80 relative flex items-center">
          <Input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search dancers by rank, height, repertoire..."
            className="h-9 text-xs bg-[#f0f0f0] border-none rounded-none text-zinc-900 pr-10 focus-visible:ring-1 focus-visible:ring-zinc-400 placeholder:text-zinc-400"
          />
          <div className="absolute right-0 top-0 h-9 w-9 bg-[#1c1e22] flex items-center justify-center shrink-0">
            <Search className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      ) : (
        <Link href="/company-dashboard/browse-dancers/short-list">
          <Button
            type="button"
            variant="outline"
            className="h-9 rounded-none border border-zinc-200 bg-[#f0f0f0] hover:bg-[#e4e4e4] text-xs text-zinc-800 flex items-center gap-1.5"
          >
            <Bookmark className="w-3.5 h-3.5 text-zinc-600" /> View My Shortlist
          </Button>
        </Link>
      )}
    </Card>
  );
}