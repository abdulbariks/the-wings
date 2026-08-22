'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart } from 'lucide-react';

export interface ApplicationItem {
  id: string;
  name: string;
  role: string;
  matchPercentage: string;
}

interface NewDancerApplicationsProps {
  applications: ApplicationItem[];
  onViewProfile?: (id: string) => void;
}

export function NewDancerApplications({
  applications,
  onViewProfile,
}: NewDancerApplicationsProps) {
  return (
    <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-5 space-y-5">
      <h2 className="font-serif text-lg font-semibold text-zinc-900 border-b border-zinc-100 pb-3">
        New Dancer Applications
      </h2>

      <div className="space-y-3">
        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-[#f8f8f8] border border-zinc-200/60 p-4 space-y-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-serif text-sm font-semibold text-zinc-900">
                  {app.name}
                </h3>
                <p className="text-[11px] text-zinc-500 font-mono">
                  {app.role}
                </p>
              </div>

              <Badge
                variant="outline"
                className="bg-[#ececec] text-zinc-800 border-none rounded-none text-[10px] font-mono px-2 py-1 flex items-center gap-1 shrink-0"
              >
                <Heart className="w-3 h-3 fill-zinc-800 text-zinc-800" />
                {app.matchPercentage} Match
              </Badge>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={() => onViewProfile?.(app.id)}
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