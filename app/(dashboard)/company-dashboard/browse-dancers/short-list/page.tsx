'use client';

import * as React from 'react';
import initialData from '@/components/dashboard/company-dashboard/browse-dancers/browse-dancers-data.json';
import { Dancer, DancerCard } from '@/components/dashboard/company-dashboard/browse-dancers/DancerCard';
import { DancerSearchBar } from '@/components/dashboard/company-dashboard/browse-dancers/DancerSearchBar';


export default function ViewMyShortlistPage() {
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

  // Filter only shortlisted items
  const shortlistedDancers = dancers.filter((d) => d.isShortlisted);

  const filteredDancers = shortlistedDancers.filter((d) => {
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
          isShortlistPage={true}
          title="My Saved Talent Shortlist"
        />

        {filteredDancers.length > 0 ? (
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
        ) : (
          <div className="bg-[#f8f8f8] border border-zinc-200/80 p-12 text-center text-xs text-zinc-400 font-mono">
            No shortlisted dancers found.
          </div>
        )}
      </div>
    </div>
  );
}