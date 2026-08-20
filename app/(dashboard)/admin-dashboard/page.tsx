"use client";

import {
  ActivityItem,
  AdminDashboardContainer,
  KPIItem,
  QuickActionItem,
} from "@/components/dashboard/admin-dashboard/dashboard/AdminDashboardContainer";
import adminData from "@/components/dashboard/admin-dashboard/dashboard/admin-dashboard-data.json";

export default function AdminDashboardPage() {
  const handleActionClick = (path: string) => {
    console.log("Navigate to:", path);
  };

  const handleRefreshStream = () => {
    console.log("Refreshing activity stream...");
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <AdminDashboardContainer
        kpis={adminData.kpis as KPIItem[]}
        activities={adminData.activityStream as ActivityItem[]}
        quickActions={adminData.quickActions as QuickActionItem[]}
        onActionClick={handleActionClick}
        onRefreshStream={handleRefreshStream}
      />
    </div>
  );
}
