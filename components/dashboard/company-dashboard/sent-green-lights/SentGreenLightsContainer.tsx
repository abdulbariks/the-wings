'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Trash2 } from 'lucide-react';

export interface ExpressedDancer {
  id: string;
  name: string;
  title: string;
  location: string;
  initialLetter: string;
  status: string;
}

interface SentGreenLightsContainerProps {
  initialDancers: ExpressedDancer[];
  onViewProfile?: (id: string) => void;
  onRemoveInterest?: (id: string) => void;
}

export function SentGreenLightsContainer({
  initialDancers,
  onViewProfile,
  onRemoveInterest,
}: SentGreenLightsContainerProps) {
  const [dancers, setDancers] = React.useState<ExpressedDancer[]>(initialDancers);

  const handleRemove = (id: string) => {
    setDancers((prev) => prev.filter((dancer) => dancer.id !== id));
    if (onRemoveInterest) {
      onRemoveInterest(id);
    }
  };

  return (
    <Card className="border border-zinc-200/80 shadow-none rounded-none bg-[#f8f8f8] p-4 sm:p-6 space-y-4">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-zinc-200/60 pb-3">
        <h1 className="font-serif text-base sm:text-lg font-normal text-zinc-900">
          Dancers I Expressed Interest In
        </h1>
        <span className="text-xs font-mono text-zinc-500">
          {dancers.length} Pending
        </span>
      </div>

      {/* List Container */}
      <div className="space-y-3">
        {dancers.map((dancer) => (
          <div
            key={dancer.id}
            className="bg-[#f0f0f0] border border-zinc-200/60 p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          >
            {/* Left Info Group */}
            <div className="flex items-center gap-3 min-w-0">
              {/* Avatar Initial Box */}
              <div className="w-10 h-10 bg-white border border-zinc-200/80 flex items-center justify-center shrink-0">
                <span className="font-serif text-lg font-bold text-zinc-900">
                  {dancer.initialLetter}
                </span>
              </div>

              {/* Text Meta */}
              <div className="truncate space-y-0.5">
                <h2 className="font-serif text-sm font-semibold text-zinc-900 leading-tight truncate">
                  {dancer.name}
                </h2>
                <p className="text-xs text-zinc-400 font-normal truncate">
                  {dancer.title} • {dancer.location}
                </p>
              </div>
            </div>

            {/* Right Action Group */}
            <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
              {/* Status Badge */}
              <div className="bg-[#f8f8f8] border border-zinc-200/60 text-zinc-800 text-xs font-normal px-3 py-1.5 sm:px-4 sm:py-2 rounded-none">
                {dancer.status}
              </div>

              {/* View Profile Action */}
              <Button
                type="button"
                variant="outline"
                onClick={() => onViewProfile?.(dancer.id)}
                className="w-9 h-9 p-0 rounded-none bg-white hover:bg-zinc-100 border border-zinc-200/80 text-zinc-800"
              >
                <Eye className="w-4 h-4 text-zinc-700" />
                <span className="sr-only">View Profile</span>
              </Button>

              {/* Delete Interest Action */}
              <Button
                type="button"
                variant="outline"
                onClick={() => handleRemove(dancer.id)}
                className="w-9 h-9 p-0 rounded-none bg-white hover:bg-zinc-100 border border-zinc-200/80 text-zinc-800"
              >
                <Trash2 className="w-4 h-4 text-zinc-700" />
                <span className="sr-only">Remove Interest</span>
              </Button>
            </div>
          </div>
        ))}

        {dancers.length === 0 && (
          <div className="text-center py-12 text-xs text-zinc-400 font-mono">
            No pending express interests found.
          </div>
        )}
      </div>
    </Card>
  );
}