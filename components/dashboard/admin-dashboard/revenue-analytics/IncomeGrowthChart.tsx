"use client";

import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipContentProps,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GrowthDataPoint {
  month: string;
  income: number;
  newSubscriptions: number;
  upgrades: number;
  lostRevenue: number;
  netGain: number;
}

interface IncomeGrowthChartProps {
  data: GrowthDataPoint[];
  stats: {
    starting: number;
    current: number;
    bestMonth: string;
    avgNetMonthlyGain: number;
  };
}

const CustomTooltip = ({ active, payload, label }: TooltipContentProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as GrowthDataPoint;
    return (
      <div className="bg-white border border-zinc-200 p-3 shadow-lg rounded-sm text-xs space-y-2 w-56">
        <div className="flex justify-between font-semibold border-b border-zinc-100 pb-1.5 text-zinc-900">
          <span>{label} 2026</span>
          <span className="font-serif">${data.income.toLocaleString()}</span>
        </div>
        <div className="space-y-1 text-zinc-500">
          <div className="flex justify-between">
            <span>New Subscriptions:</span>
            <span className="text-zinc-700">
              +${data.newSubscriptions.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Income From Upgrades:</span>
            <span className="text-zinc-700">
              +${data.upgrades.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Lost Revenue:</span>
            <span className="text-zinc-700">
              -${data.lostRevenue.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex justify-between font-semibold border-t border-zinc-100 pt-1.5 text-zinc-900">
          <span>Net Monthly Gain:</span>
          <span className="text-zinc-900">
            +${data.netGain.toLocaleString()}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export function IncomeGrowthChart({ data, stats }: IncomeGrowthChartProps) {
  const [range, setRange] = React.useState<"6" | "12">("12");

  const chartData = React.useMemo(() => {
    return range === "6" ? data.slice(6) : data;
  }, [data, range]);

  return (
    <Card className="border-zinc-200/80 shadow-none rounded-none bg-white">
      <CardContent className="p-6 space-y-6">
        {/* Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="font-serif text-lg font-medium text-zinc-900">
            Monthly Income Growth Chart
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-zinc-100 p-0.5 rounded-sm">
              <Button
                variant="ghost"
                size="sm"
                className={`h-7 text-xs px-3 rounded-sm ${
                  range === "6"
                    ? "bg-white shadow-xs text-zinc-900"
                    : "text-zinc-500"
                }`}
                onClick={() => setRange("6")}
              >
                6 Month
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`h-7 text-xs px-3 rounded-sm ${
                  range === "12"
                    ? "bg-white shadow-xs text-zinc-900"
                    : "text-zinc-500"
                }`}
                onClick={() => setRange("12")}
              >
                12 Month
              </Button>
            </div>
            <Select defaultValue="2026">
              <SelectTrigger className="h-8 w-22.5 text-xs bg-white border-zinc-200">
                <SelectValue placeholder="2026" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2026" className="text-xs">
                  2026
                </SelectItem>
                <SelectItem value="2025" className="text-xs">
                  2025
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Chart Area */}
        <div className="h-80 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4d4d8" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#e4e4e7" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#71717a", fontSize: 11 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#a1a1aa", fontSize: 11 }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
                domain={["dataMin - 3000", "dataMax + 2000"]}
              />
              <Tooltip content={CustomTooltip} />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#18181b"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#incomeGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Footer Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-zinc-100 text-center bg-zinc-50/50 p-4">
          <div>
            <div className="text-[11px] text-zinc-400">Starting:</div>
            <div className="font-serif text-sm font-medium text-zinc-900 mt-1">
              ${stats.starting.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-[11px] text-zinc-400">Current:</div>
            <div className="font-serif text-sm font-medium text-zinc-900 mt-1">
              ${stats.current.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-[11px] text-zinc-400">Best Month:</div>
            <div className="font-serif text-sm font-medium text-zinc-900 mt-1">
              {stats.bestMonth}
            </div>
          </div>
          <div>
            <div className="text-[11px] text-zinc-400">
              Avg Net Monthly Gain:
            </div>
            <div className="font-serif text-sm font-medium text-zinc-900 mt-1">
              +${stats.avgNetMonthlyGain.toLocaleString()} / mo
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
