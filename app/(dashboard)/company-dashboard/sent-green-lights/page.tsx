'use client';

import { SentGreenLightsContainer } from '@/components/dashboard/company-dashboard/sent-green-lights/SentGreenLightsContainer';
import sentData from '@/components/dashboard/company-dashboard/sent-green-lights/sent-green-lights-data.json';

export default function SentGreenLightsPage() {
  const handleViewProfile = (id: string) => {
    console.log(`View dancer profile ID: ${id}`);
  };

  const handleRemoveInterest = (id: string) => {
    console.log(`Removed interest for dancer ID: ${id}`);
  };

  return (
    <div className="bg-[#f2f2f2] min-h-screen">
      <SentGreenLightsContainer
        initialDancers={sentData.dancers}
        onViewProfile={handleViewProfile}
        onRemoveInterest={handleRemoveInterest}
      />
    </div>
  );
}
