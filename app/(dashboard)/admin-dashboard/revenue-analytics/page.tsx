import analyticsData from "@/components/dashboard/admin-dashboard/revenue-analytics/revenue-analytics.json";
import { RevenueMetrics } from "@/components/dashboard/admin-dashboard/revenue-analytics/RevenueMetrics";
import { IncomeGrowthChart } from "@/components/dashboard/admin-dashboard/revenue-analytics/IncomeGrowthChart";

export default function RevenueAnalyticsPage() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen space-y-6 max-w-full">
      {/* Top Metric Cards Section */}
      <RevenueMetrics
        totalMonthlyIncome={analyticsData.summary.totalMonthlyIncome}
        totalMonthlyIncomeTrend={analyticsData.summary.totalMonthlyIncomeTrend}
        companiesThatLeft={analyticsData.summary.companiesThatLeft}
        companiesThatLeftTrend={analyticsData.summary.companiesThatLeftTrend}
        avgRevenuePerAccount={analyticsData.summary.avgRevenuePerAccount}
        revenueKeptFromExisting={analyticsData.summary.revenueKeptFromExisting}
      />

      {/* Main Income Growth Chart Component */}
      <IncomeGrowthChart
        data={analyticsData.monthlyGrowth}
        stats={analyticsData.chartStats}
      />
    </div>
  );
}
