"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  TrendingUp,
  TrendingDown,
  Clock,
  RotateCw,
  ChevronRight,
  ShieldAlert,
  UserCheck,
  LineChart,
} from "lucide-react";

export interface KPIItem {
  id: string;
  title: string;
  value: string;
  badgeText: string;
  badgeType: "trend-up" | "trend-down" | "pending" | "info";
  icon: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
}

export interface QuickActionItem {
  id: string;
  label: string;
  badgeCount: number | null;
  icon: string;
  path: string;
}

interface AdminDashboardContainerProps {
  kpis: KPIItem[];
  activities: ActivityItem[];
  quickActions: QuickActionItem[];
  onActionClick?: (path: string) => void;
  onRefreshStream?: () => void;
}

export function AdminDashboardContainer({
  kpis,
  activities,
  quickActions,
  onActionClick,
  onRefreshStream,
}: AdminDashboardContainerProps) {
  const renderKpiIcon = (icon: string) => {
    switch (icon) {
      case "users":
        return <Users className="w-4 h-4 text-zinc-400" />;
      case "building":
        return <Building2 className="w-4 h-4 text-zinc-400" />;
      case "check-circle":
        return <CheckCircle2 className="w-4 h-4 text-zinc-400" />;
      case "dollar":
        return <CircleDollarSign className="w-4 h-4 text-zinc-400" />;
      default:
        return null;
    }
  };

  const renderActionIcon = (icon: string) => {
    switch (icon) {
      case "building-check":
        return <Building2 className="w-4 h-4 text-zinc-600" />;
      case "shield-alert":
        return <ShieldAlert className="w-4 h-4 text-zinc-600" />;
      case "user-check":
        return <UserCheck className="w-4 h-4 text-zinc-600" />;
      case "line-chart":
        return <LineChart className="w-4 h-4 text-zinc-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card
            key={kpi.id}
            className="border border-zinc-200/80 shadow-none rounded-none bg-white p-5 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs text-zinc-500 font-medium">
                {kpi.title}
              </span>
              {renderKpiIcon(kpi.icon)}
            </div>

            <div className="flex items-baseline justify-between pt-4">
              <span className="font-serif text-2xl font-semibold text-zinc-900">
                {kpi.value}
              </span>

              {kpi.badgeType === "trend-up" && (
                <Badge
                  variant="outline"
                  className="bg-zinc-100/80 text-zinc-700 border-none rounded-none text-[11px] font-normal px-2 py-0.5 flex items-center gap-1"
                >
                  <TrendingUp className="w-3 h-3 text-zinc-700" />
                  {kpi.badgeText}
                </Badge>
              )}

              {kpi.badgeType === "trend-down" && (
                <Badge
                  variant="outline"
                  className="bg-zinc-100/80 text-zinc-700 border-none rounded-none text-[11px] font-normal px-2 py-0.5 flex items-center gap-1"
                >
                  <TrendingDown className="w-3 h-3 text-zinc-700" />
                  {kpi.badgeText}
                </Badge>
              )}

              {kpi.badgeType === "pending" && (
                <Badge
                  variant="outline"
                  className="bg-zinc-100/80 text-zinc-700 border-none rounded-none text-[11px] font-normal px-2 py-0.5 flex items-center gap-1"
                >
                  <Clock className="w-3 h-3 text-zinc-500" />
                  {kpi.badgeText}
                </Badge>
              )}

              {kpi.badgeType === "info" && (
                <Badge
                  variant="outline"
                  className="bg-zinc-100/80 text-zinc-700 border-none rounded-none text-[11px] font-normal px-2 py-0.5 flex items-center gap-1"
                >
                  <Clock className="w-3 h-3 text-zinc-500" />
                  {kpi.badgeText}
                </Badge>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Content Area: Activity Stream + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Activity Stream (2 cols) */}
        <Card className="lg:col-span-2 border border-zinc-200/80 shadow-none rounded-none bg-white">
          <CardHeader className="p-6 pb-4 border-b border-zinc-100 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="font-serif text-xl font-semibold text-zinc-900">
              Activity Stream
            </CardTitle>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onRefreshStream}
              className="h-8 w-8 text-zinc-500 hover:text-zinc-900 rounded-none"
              title="Refresh Stream"
            >
              <RotateCw className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="p-6 space-y-3">
            {activities.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-100/60 p-4 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-zinc-900 mt-1.5 shrink-0" />
                  <div className="space-y-1 min-w-0">
                    <h3 className="font-medium text-xs text-zinc-900 font-sans">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 whitespace-nowrap shrink-0">
                  {item.timestamp}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Right Column: Quick Actions (1 col) */}
        <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white flex flex-col justify-start">
          <CardHeader className="p-6 pb-4 border-b border-zinc-100">
            <CardTitle className="font-serif text-xl font-semibold text-zinc-900">
              Quick Actions
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-3">
            {quickActions.map((action) => (
              <button
                key={action.id}
                type="button"
                onClick={() => onActionClick && onActionClick(action.path)}
                className="w-full bg-zinc-100/60 hover:bg-zinc-100 p-3.5 flex items-center justify-between transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  {renderActionIcon(action.icon)}
                  <span className="text-xs font-medium text-zinc-800 group-hover:text-zinc-900">
                    {action.label}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {action.badgeCount !== null && (
                    <span className="bg-zinc-900 text-white text-[10px] font-mono px-2 py-0.5 min-w-[18px] text-center">
                      {action.badgeCount}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-800" />
                </div>
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
