"use client";

import {
  SavedCompanyProfile,
  SavedProfilesGrid,
} from "@/components/dashboard/dancer-dashboard/saved-profiles/SavedProfilesGrid";
import savedData from "@/components/dashboard/dancer-dashboard/saved-profiles/saved-profiles-data.json";

export default function SavedProfilesPage() {
  const handleViewProfile = (id: string) => {
    console.log("Navigate to company profile:", id);
  };

  const handleRemoveProfile = (id: string) => {
    console.log("Bookmark removed for company ID:", id);
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <SavedProfilesGrid
        initialProfiles={savedData.profiles as SavedCompanyProfile[]}
        onViewProfile={handleViewProfile}
        onRemoveProfile={handleRemoveProfile}
      />
    </div>
  );
}
