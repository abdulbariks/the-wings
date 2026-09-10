"use client";

import { usePathname } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { getDashboardRole } from "@/lib/config/roles";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const role = getDashboardRole(pathname);

  return <DashboardShell role={role}>{children}</DashboardShell>;
}
