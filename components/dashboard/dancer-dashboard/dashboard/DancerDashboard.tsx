"use client";

import { CheckCircle2, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DancerDashboard() {
  const applications = [
    {
      company: "Paris Opéra Ballet",
      role: "Principal Guest Artist (Swan Lake)",
      details: "Callback scheduled for Aug 12 in Paris",
      date: "2026-07-28",
      status: "Company Shortlisted Me",
    },
    {
      company: "Royal Swedish Ballet",
      role: "Soloist Contract (Neoclassical)",
      details: "Audition confirmed for Sept 15 in London",
      date: "2026-07-20",
      status: "Contract Received",
    },
    {
      company: "Netherlands Dance Theatre",
      role: "Guest Choreography Project",
      details: "Artistic Director reviewing dance reel",
      date: "2026-07-15",
      status: "Being Reviewed",
    },
    {
      company: "Berlin State Ballet",
      role: "Corps de Ballet Audition",
      details: "Awaiting final callback decisions",
      date: "2026-07-02",
      status: "Audition Done",
    },
  ];

  const schedule = [
    {
      day: "12",
      month: "August",
      title: "Paris Opéra Ballet Callback",
      sub: "Studio 4, Palais Garnier, Paris",
      type: "In-person Audition",
    },
    {
      day: "18",
      month: "August",
      title: "Royal Swedish Ballet Contract Review",
      sub: "Online Contract Call",
      type: "Contract Signing",
    },
    {
      day: "25",
      month: "August",
      title: "Contemporary Partnering Masterclass",
      sub: "Copenhagen Dance Institute",
      type: "Masterclass Workshop",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white p-4 rounded-lg border border-zinc-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12 rounded">
            <AvatarImage src="/avatars/astrid.jpg" />
            <AvatarFallback className="rounded bg-zinc-200">AL</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold text-zinc-900">
                Astrid Lindholm
              </h2>
              <Badge
                variant="outline"
                className="text-[10px] font-normal border-zinc-300 gap-1"
              >
                <CheckCircle2 className="w-3 h-3 text-zinc-700" />
                Verified Soloist
              </Badge>
            </div>
            <p className="text-xs text-zinc-500 mt-0.5">
              Principal Soloist • Royal Danish Ballet Alumnus • Copenhagen,
              Denmark
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[10px] text-zinc-400 block">
              Profile Readiness
            </span>
            <span className="text-xs font-semibold text-zinc-800">
              95% Complete
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-xs h-8 border-zinc-200 gap-1.5"
          >
            <Video className="w-3.5 h-3.5" />
            View Dancer Reel
          </Button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-none border-zinc-200">
          <CardContent className="p-4 flex flex-col justify-between h-28">
            <span className="text-xs text-zinc-500 font-medium">
              Companies I Applied To
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-serif text-zinc-900">4</span>
              <span className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-medium">
                2 Company Shortlisted Me
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none border-zinc-200">
          <CardContent className="p-4 flex flex-col justify-between h-28">
            <span className="text-xs text-zinc-500 font-medium">
              Interview Invitations
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-serif text-zinc-900">3</span>
              <span className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-medium">
                1 Response Pending
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none border-zinc-200">
          <CardContent className="p-4 flex flex-col justify-between h-28">
            <span className="text-xs text-zinc-500 font-medium">
              Saved Companies
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-serif text-zinc-900">12</span>
              <span className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-medium">
                Bookmarked
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none border-zinc-200">
          <CardContent className="p-4 flex flex-col justify-between h-28">
            <span className="text-xs text-zinc-500 font-medium">
              Profile Views
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-serif text-zinc-900">1,240</span>
              <span className="text-[10px] text-emerald-600 font-medium">
                ↗ +18%
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applications & Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-5 rounded-lg border border-zinc-200 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold text-zinc-900">
              My Applications
            </h3>
            <span className="text-xs text-zinc-400">4 Active Tracks</span>
          </div>

          <div className="space-y-3">
            {applications.map((app, index) => (
              <div
                key={index}
                className="p-4 rounded-md bg-zinc-50/60 border border-zinc-100 flex flex-col sm:flex-row justify-between sm:items-center gap-2"
              >
                <div>
                  <h4 className="text-xs font-semibold text-zinc-900">
                    {app.company}{" "}
                    <span className="font-normal text-zinc-500">
                      • {app.role}
                    </span>
                  </h4>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    {app.details}
                  </p>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                  <span className="text-[10px] text-zinc-400">{app.date}</span>
                  <Badge
                    variant="secondary"
                    className="text-[10px] bg-zinc-200/60 font-normal text-zinc-800"
                  >
                    {app.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-zinc-200 space-y-4">
          <h3 className="text-sm font-semibold text-zinc-900">
            Upcoming Schedule
          </h3>
          <div className="space-y-3">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-md bg-zinc-50/60 border border-zinc-100 flex items-center gap-4"
              >
                <div className="text-center shrink-0 w-10">
                  <span className="text-lg font-serif font-bold text-zinc-900 block leading-tight">
                    {item.day}
                  </span>
                  <span className="text-[9px] text-zinc-400 uppercase tracking-wider block">
                    {item.month}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-900">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-zinc-500 mt-0.5">{item.sub}</p>
                  <span className="text-[9px] text-zinc-400 block mt-1">
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
