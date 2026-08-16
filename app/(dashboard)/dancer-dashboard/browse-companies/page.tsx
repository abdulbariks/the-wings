"use client";

import { BrowseCompaniesContainer } from "@/components/dashboard/dancer-dashboard/browse-companies/BrowseCompaniesContainer";
import { CompanyData } from "@/components/dashboard/dancer-dashboard/browse-companies/CompanyCard";
import browseData from "@/components/dashboard/dancer-dashboard/browse-companies/browse-companies-data.json";

export default function BrowseCompaniesPage() {
  const handleViewProfile = (id: string) => {
    console.log("Viewing company profile ID:", id);
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <BrowseCompaniesContainer
        initialCompanies={browseData.companies as CompanyData[]}
        onViewProfile={handleViewProfile}
      />
    </div>
  );
}
