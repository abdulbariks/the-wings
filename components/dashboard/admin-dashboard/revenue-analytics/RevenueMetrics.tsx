"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, UserX } from "lucide-react";

interface RevenueMetricsProps {
  totalMonthlyIncome: number;
  totalMonthlyIncomeTrend: number;
  companiesThatLeft: number;
  companiesThatLeftTrend: number;
  avgRevenuePerAccount: number;
  revenueKeptFromExisting: number;
}

export function RevenueMetrics({
  totalMonthlyIncome,
  totalMonthlyIncomeTrend,
  companiesThatLeft,
  companiesThatLeftTrend,
  avgRevenuePerAccount,
  revenueKeptFromExisting,
}: RevenueMetricsProps) {
  return (
    <div className="space-y-3">
      {/* Top Row Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Total Monthly Income */}
        <Card className="border-zinc-200/80 shadow-none rounded-none bg-white">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-600">
                Total Monthly Income
              </span>
              <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-serif font-medium text-zinc-900">
                ${totalMonthlyIncome.toLocaleString()}
              </span>
              <Badge
                variant="outline"
                className="bg-zinc-50 border-zinc-200 text-zinc-600 font-mono text-[11px] px-2 py-0.5 rounded-sm"
              >
                <TrendingUp className="w-3 h-3 mr-1 text-zinc-500" />+
                {totalMonthlyIncomeTrend}%
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Companies That Left */}
        <Card className="border-zinc-200/80 shadow-none rounded-none bg-white">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-600">
                Companies That Left
              </span>
              <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600">
                <UserX className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-serif font-medium text-zinc-900">
                {companiesThatLeft}%
              </span>
              <Badge
                variant="outline"
                className="bg-zinc-50 border-zinc-200 text-zinc-600 font-mono text-[11px] px-2 py-0.5 rounded-sm"
              >
                <TrendingDown className="w-3 h-3 mr-1 text-zinc-500" />
                {companiesThatLeftTrend}%
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Bar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-between p-4 bg-white border border-zinc-200/80">
          <span className="text-xs text-zinc-600">
            Avg Revenue / Account ( Average Income Per Customer)
          </span>
          <span className="text-lg font-serif font-medium text-zinc-900">
            ${avgRevenuePerAccount} / mo
          </span>
        </div>

        <div className="flex items-center justify-between p-4 bg-white border border-zinc-200/80">
          <span className="text-xs text-zinc-600">
            Revenue Kept From Existing Customers
          </span>
          <span className="text-lg font-serif font-medium text-zinc-900">
            {revenueKeptFromExisting}%
          </span>
        </div>
      </div>
    </div>
  );
}
