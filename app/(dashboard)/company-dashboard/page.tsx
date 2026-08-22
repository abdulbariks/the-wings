'use client';

import dashboardData from '@/components/dashboard/company-dashboard/dashboard/company-dashboard-data.json';
import { DashboardHeader } from '@/components/dashboard/company-dashboard/dashboard/DashboardHeader';
import { StatsGrid } from '@/components/dashboard/reusable/StatsGrid';
import { ShortlistedDancers } from '@/components/dashboard/company-dashboard/dashboard/ShortlistedDancers';
import { NewDancerApplications } from '@/components/dashboard/company-dashboard/dashboard/NewDancerApplications';

export default function CompanyDashboardPage() {
  const handleViewAllShortlisted = () => {
    console.log('Navigate to full Shortlisted Dancers directory');
  };

  const handleViewProfile = (id: string) => {
    console.log(`View dancer profile ID: ${id}`);
  };

  return (
    <div className="bg-[#f2f2f2] min-h-screen">
      <div className="space-y-6">
        {/* Top Header */}
        <DashboardHeader company={dashboardData.company} />

        {/* Reusable Key Metrics Row */}
        <StatsGrid stats={dashboardData.stats} />

        {/* Main Content Grid (Shortlisted & Applications) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <ShortlistedDancers
              dancers={dashboardData.shortlistedDancers}
              onViewAll={handleViewAllShortlisted}
              onViewProfile={handleViewProfile}
            />
          </div>

          <div className="lg:col-span-1">
            <NewDancerApplications
              applications={dashboardData.newApplications}
              onViewProfile={handleViewProfile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}