'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import Image from 'next/image';

export interface ShortlistedDancer {
  id: string;
  name: string;
  title: string;
  location: string;
  image: string;
}

interface ShortlistedDancersProps {
  dancers: ShortlistedDancer[];
  onViewAll?: () => void;
  onViewProfile?: (id: string) => void;
}

export function ShortlistedDancers({
  dancers,
  onViewAll,
  onViewProfile,
}: ShortlistedDancersProps) {
  return (
    <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
        <h2 className="font-serif text-lg font-semibold text-zinc-900">
          Recently Shortlisted Dancers
        </h2>
        <Button
          variant="outline"
          onClick={onViewAll}
          className="h-8 bg-[#282a2e] hover:bg-black text-white border-none rounded-none text-xs px-4"
        >
          View all
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dancers.map((dancer) => (
          <div
            key={dancer.id}
            className="bg-[#f8f8f8] border border-zinc-200/60 p-3 space-y-3"
          >
            <div className="aspect-4/3 bg-zinc-200 overflow-hidden border border-zinc-200/60 relative">
              <Image
                src={dancer.image}
                alt={dancer.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            <div className="space-y-0.5">
              <h3 className="font-serif text-sm font-semibold text-zinc-900">
                {dancer.name}
              </h3>
              <p className="text-[11px] text-zinc-500 font-mono">
                {dancer.title} • {dancer.location}
              </p>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={() => onViewProfile?.(dancer.id)}
              className="w-full h-8 rounded-none bg-white hover:bg-zinc-100 border border-zinc-200 text-xs text-zinc-800 flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-zinc-500" /> View Profile
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}