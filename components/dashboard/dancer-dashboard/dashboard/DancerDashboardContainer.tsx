"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  UserCheck,
  Inbox,
  Bookmark,
  BarChart2,
  TrendingUp,
  Video,
  CheckCircle2,
} from "lucide-react";

export interface DancerProfile {
  name: string;
  avatar: string;
  role: string;
  details: string;
  completeness: number;
  reelUrl: string;
}

export interface DancerKPI {
  id: string;
  title: string;
  value: string;
  badgeText: string;
  badgeType: "highlight" | "pending" | "neutral" | "trend-up";
  icon: string;
}

export interface ApplicationItem {
  id: string;
  company: string;
  role: string;
  subtitle: string;
  date: string;
  status: string;
  statusVariant: "outline" | "dark";
}

export interface ScheduleItem {
  id: string;
  day: string;
  month: string;
  title: string;
  location: string;
  tag: string;
}

interface DancerDashboardContainerProps {
  profile: DancerProfile;
  kpis: DancerKPI[];
  applications: ApplicationItem[];
  schedule: ScheduleItem[];
  onViewReel?: () => void;
}

export function DancerDashboardContainer({
  profile,
  kpis,
  applications,
  schedule,
  onViewReel,
}: DancerDashboardContainerProps) {
  const renderKpiIcon = (icon: string) => {
    switch (icon) {
      case "user-check":
        return <UserCheck className="w-4 h-4 text-zinc-400" />;
      case "inbox":
        return <Inbox className="w-4 h-4 text-zinc-400" />;
      case "bookmark":
        return <Bookmark className="w-4 h-4 text-zinc-400" />;
      case "bar-chart":
        return <BarChart2 className="w-4 h-4 text-zinc-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Profile Header Banner */}
      <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12 rounded-full border border-zinc-200">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback className="rounded-full bg-zinc-100 text-zinc-700 font-medium">
              {profile.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-xl font-bold text-zinc-900 leading-none">
                {profile.name}
              </h1>
              <Badge
                variant="outline"
                className="bg-zinc-100/80 text-zinc-700 border-none rounded-none text-[10px] font-normal px-2 py-0.5 flex items-center gap-1"
              >
                <CheckCircle2 className="w-3 h-3 text-zinc-600" />
                {profile.role}
              </Badge>
            </div>
            <p className="text-xs text-zinc-400 font-normal">
              {profile.details}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 self-end sm:self-auto">
          <div className="text-right">
            <span className="text-[10px] text-zinc-400 font-medium block">
              Profile Readiness
            </span>
            <span className="text-xs font-semibold text-zinc-900">
              {profile.completeness}% Complete
            </span>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={onViewReel}
            className="h-9 rounded-none border-zinc-200/80 bg-zinc-100/60 hover:bg-zinc-100 text-xs font-medium text-zinc-800 px-4 flex items-center gap-2"
          >
            <Video className="w-3.5 h-3.5 text-zinc-600" />
            View Dancer Reel
          </Button>
        </div>
      </Card>

      {/* 4 KPI Cards Grid */}
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

              <Badge
                variant="outline"
                className="bg-zinc-100/80 text-zinc-700 border-none rounded-none text-[11px] font-normal px-2 py-0.5 flex items-center gap-1"
              >
                {kpi.badgeType === "trend-up" && (
                  <TrendingUp className="w-3 h-3 text-zinc-700" />
                )}
                {kpi.badgeText}
              </Badge>
            </div>
          </Card>
        ))}
      </div>

      {/* Dashboard Body Grid: Applications + Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: My Applications (2 cols) */}
        <Card className="lg:col-span-2 border border-zinc-200/80 shadow-none rounded-none bg-white">
          <CardHeader className="p-6 pb-4 border-b border-zinc-100 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="font-serif text-xl font-semibold text-zinc-900">
              My Applications
            </CardTitle>
            <span className="text-xs text-zinc-400 font-normal">
              {applications.length} Active Tracks
            </span>
          </CardHeader>

          <CardContent className="p-6 space-y-3">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-zinc-100/60 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-bold text-xs text-zinc-900 font-sans">
                      {app.company}
                    </span>
                    <span className="text-xs text-zinc-500 font-normal">
                      • {app.role}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-normal">
                    {app.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <span className="text-[11px] font-mono text-zinc-400">
                    {app.date}
                  </span>

                  {app.statusVariant === "dark" ? (
                    <Badge className="bg-zinc-900 text-white hover:bg-zinc-900 border-none rounded-none text-[10px] font-normal px-3 py-1">
                      {app.status}
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="bg-white text-zinc-700 border border-zinc-200 rounded-none text-[10px] font-normal px-3 py-1 shadow-2xs"
                    >
                      {app.status}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Right Section: Upcoming Schedule (1 col) */}
        <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white flex flex-col justify-start">
          <CardHeader className="p-6 pb-4 border-b border-zinc-100">
            <CardTitle className="font-serif text-xl font-semibold text-zinc-900">
              Upcoming Schedule
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-3">
            {schedule.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-100/60 p-4 flex items-start gap-4"
              >
                {/* Date Block */}
                <div className="text-center bg-white border border-zinc-200/60 p-2.5 min-w-14 shrink-0">
                  <span className="font-serif text-xl font-bold text-zinc-900 block leading-none">
                    {item.day}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-normal block pt-1">
                    {item.month}
                  </span>
                </div>

                {/* Event Information */}
                <div className="space-y-1 min-w-0">
                  <h3 className="font-semibold text-xs text-zinc-900 font-sans leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 font-normal">
                    {item.location}
                  </p>
                  <span className="text-[10px] text-zinc-400 font-normal block pt-0.5">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
