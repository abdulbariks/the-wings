'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export interface CompanyHeaderData {
  name: string;
  isVerified: boolean;
  verifiedText: string;
  director: string;
  license: string;
  location: string;
  logoLetter: string;
}

export function DashboardHeader({ company }: { company: CompanyHeaderData }) {
  return (
    <Card className="border border-zinc-200/80 shadow-none rounded-none bg-[#f8f8f8] px-5 py-4 flex items-center md:flex-row gap-4">
      {/* Square Logo Placeholder */}
      <div className="w-11 h-11 bg-[#ececec] border border-zinc-200/60 flex items-center justify-center shrink-0">
        <span className="font-serif text-xl font-bold text-zinc-900">
          {company.logoLetter}
        </span>
      </div>

      {/* Title & Metadata */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h1 className="font-serif text-lg font-normal text-zinc-900 leading-none">
            {company.name}
          </h1>

          {company.isVerified && (
            <Badge
              variant="outline"
              className="bg-[#ebebeb] text-zinc-800 border-none rounded-none text-[11px] font-mono font-normal px-2 py-0.5 flex items-center gap-1 shrink-0"
            >
              <CheckCircle2 className="w-3.5 h-3.5 fill-zinc-800 text-[#ebebeb]" />
              {company.verifiedText}
            </Badge>
          )}
        </div>

        <p className="text-xs text-zinc-400 font-normal">
          {company.director} • {company.license} • {company.location}
        </p>
      </div>
    </Card>
  );
}