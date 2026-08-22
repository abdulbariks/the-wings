'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Eye, Send } from 'lucide-react';

export interface Dancer {
  id: string;
  name: string;
  location: string;
  initialLetter: string;
  rank: string;
  height: string;
  workVisa: string;
  pointeSkill: string;
  repertoire: string[];
  isShortlisted: boolean;
  greenLightSent: boolean;
}

interface DancerCardProps {
  dancer: Dancer;
  onToggleShortlist: (id: string) => void;
  onToggleGreenLight: (id: string) => void;
  onViewProfile?: (id: string) => void;
}

export function DancerCard({
  dancer,
  onToggleShortlist,
  onToggleGreenLight,
  onViewProfile,
}: DancerCardProps) {
  return (
    <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-5 flex flex-col justify-between space-y-4">
      {/* Header Info */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#f2f2f2] border border-zinc-200/60 flex items-center justify-center shrink-0">
            <span className="font-serif text-lg font-bold text-zinc-900">
              {dancer.initialLetter}
            </span>
          </div>

          <div className="space-y-0.5">
            <h3 className="font-serif text-base font-semibold text-zinc-900 leading-tight">
              {dancer.name}
            </h3>
            <p className="text-xs text-zinc-400 font-normal">
              {dancer.location}
            </p>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={() => onToggleShortlist(dancer.id)}
          className="w-8 h-8 p-0 rounded-none bg-[#f8f8f8] border border-zinc-200/60 text-zinc-700 hover:bg-zinc-200"
        >
          <Bookmark
            className={`w-4 h-4 ${
              dancer.isShortlisted ? 'fill-zinc-900 text-zinc-900' : 'text-zinc-600'
            }`}
          />
          <span className="sr-only">Shortlist</span>
        </Button>
      </div>

      {/* Specifications Table Box */}
      <div className="bg-[#f8f8f8] p-3 text-xs space-y-1.5 font-sans">
        <div className="flex justify-between items-center">
          <span className="text-zinc-400 font-normal">Rank:</span>
          <span className="text-zinc-800 font-medium">{dancer.rank}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400 font-normal">Height:</span>
          <span className="text-zinc-800 font-medium">{dancer.height}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400 font-normal">Work Visa:</span>
          <span className="text-zinc-800 font-medium">{dancer.workVisa}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400 font-normal">Pointe Skill Level:</span>
          <span className="text-zinc-800 font-medium">{dancer.pointeSkill}</span>
        </div>
      </div>

      {/* Repertoire Badges */}
      <div className="flex flex-wrap gap-1.5 min-h-13 items-start">
        {dancer.repertoire.map((item, idx) => (
          <Badge
            key={idx}
            variant="outline"
            className="bg-[#f2f2f2] text-zinc-700 border-none rounded-none text-[11px] font-normal px-2.5 py-1"
          >
            {item}
          </Badge>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <Button
          type="button"
          variant="outline"
          onClick={() => onViewProfile?.(dancer.id)}
          className="h-9 rounded-none bg-[#f4f4f4] hover:bg-[#eaeaea] border-none text-xs text-zinc-800 flex items-center justify-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5 text-zinc-600" /> View Profile
        </Button>

        {dancer.greenLightSent ? (
          <Button
            type="button"
            variant="outline"
            onClick={() => onToggleGreenLight(dancer.id)}
            className="h-9 rounded-none bg-[#f4f4f4] hover:bg-[#eaeaea] border-none text-xs text-zinc-800 flex items-center justify-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5 text-zinc-600" /> Sent Green Light
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => onToggleGreenLight(dancer.id)}
            className="h-9 rounded-none bg-[#1c1e22] hover:bg-black text-white text-xs flex items-center justify-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" /> Green Light Send
          </Button>
        )}
      </div>
    </Card>
  );
}