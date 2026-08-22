'use client';

import * as React from 'react';
import initialData from '@/components/dashboard/company-dashboard/browse-dancers/browse-dancers-data.json';
import { Dancer, DancerCard } from '@/components/dashboard/company-dashboard/browse-dancers/DancerCard';
import { DancerSearchBar } from '@/components/dashboard/company-dashboard/browse-dancers/DancerSearchBar';


export default function BrowseDancersPage() {
  const [dancers, setDancers] = React.useState<Dancer[]>(initialData.dancers);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleToggleShortlist = (id: string) => {
    setDancers((prev) =>
      prev.map((d) => (d.id === id ? { ...d, isShortlisted: !d.isShortlisted } : d))
    );
  };

  const handleToggleGreenLight = (id: string) => {
    setDancers((prev) =>
      prev.map((d) => (d.id === id ? { ...d, greenLightSent: !d.greenLightSent } : d))
    );
  };

  const filteredDancers = dancers.filter((d) => {
    const q = searchQuery.toLowerCase();
    return (
      d.name.toLowerCase().includes(q) ||
      d.rank.toLowerCase().includes(q) ||
      d.location.toLowerCase().includes(q) ||
      d.repertoire.some((r) => r.toLowerCase().includes(q))
    );
  });

  return (
    <div className="bg-[#f2f2f2] min-h-screen">
      <div className="space-y-6">
        <DancerSearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDancers.map((dancer) => (
            <DancerCard
              key={dancer.id}
              dancer={dancer}
              onToggleShortlist={handleToggleShortlist}
              onToggleGreenLight={handleToggleGreenLight}
            />
          ))}
        </div>
      </div>
    </div>
  );
}