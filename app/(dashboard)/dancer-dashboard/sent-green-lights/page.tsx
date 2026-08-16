"use client";
import {
  CompanyInterestItem,
  SentGreenLightsList,
} from "@/components/dashboard/dancer-dashboard/sent-green-lights/SentGreenLightsList";
import greenLightsData from "@/components/dashboard/dancer-dashboard/sent-green-lights/green-lights-data.json";

export default function SentGreenLightsPage() {
  const handleView = (id: string) => {
    console.log("View company details:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Deleted interest entry:", id);
  };

  return (
    <div className="bg-[#FCFCFA] min-h-screen">
      <SentGreenLightsList
        initialItems={greenLightsData.companies as CompanyInterestItem[]}
        onView={handleView}
        onDelete={handleDelete}
      />
    </div>
  );
}
