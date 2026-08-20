"use client";

import {
  ApplicationItem,
  DancerDashboardContainer,
  DancerKPI,
  DancerProfile,
  ScheduleItem,
} from "./DancerDashboardContainer";
import dancerData from "./dancer-dashboard-data.json";

export default function DancerDashboard() {
  const handleViewReel = () => {
    if (dancerData.profile.reelUrl) {
      window.open(dancerData.profile.reelUrl, "_blank");
    }
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <DancerDashboardContainer
        profile={dancerData.profile as DancerProfile}
        kpis={dancerData.kpis as DancerKPI[]}
        applications={dancerData.applications as ApplicationItem[]}
        schedule={dancerData.upcomingSchedule as ScheduleItem[]}
        onViewReel={handleViewReel}
      />
    </div>
  );
}
