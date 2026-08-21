'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, Handshake, Sparkles } from 'lucide-react';

export interface StatItem {
  id: string;
  label: string;
  value: string;
  badge: string;
  icon: string;
}

export function StatsGrid({ stats }: { stats: StatItem[] }) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-4 h-4 text-zinc-600" />;
      case 'Clock':
        return <Clock className="w-4 h-4 text-zinc-600" />;
      case 'Handshake':
        return <Handshake className="w-4 h-4 text-zinc-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-zinc-600" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card
          key={stat.id}
          className="border border-zinc-200/80 shadow-none rounded-none bg-white p-5 flex flex-col justify-between h-32"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-600 font-medium">
              {stat.label}
            </span>
            {renderIcon(stat.icon)}
          </div>

          <div className="flex items-baseline justify-between pt-2">
            <span className="font-serif text-3xl text-zinc-900 leading-none">
              {stat.value}
            </span>
            <Badge
              variant="outline"
              className="bg-[#f2f2f2] text-zinc-700 border-none rounded-none text-[10px] font-mono font-normal px-2 py-0.5"
            >
              {stat.badge}
            </Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}