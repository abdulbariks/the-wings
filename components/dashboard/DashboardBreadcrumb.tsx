"use client";

import { usePathname } from "next/navigation";
import { navigationByRole } from "@/components/dashboard/data/dashboard-data";
import { UserRole } from "@/components/dashboard/types/dashboard";

const rootDashboardMap: Record<string, string> = {
  "/dancer-dashboard": "Dancer Dashboard",
  "/company-dashboard": "Company Dashboard",
  "/admin-dashboard": "Admin Dashboard",
};

// -------------------------------------------
// Format URL if not found in navigationByRole
// -------------------------------------------
const formatLabel = (segment: string) =>
  segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

const findLabelByHref = (href: string): string | null => {
  if (rootDashboardMap[href]) {
    return rootDashboardMap[href];
  }

  for (const role of Object.keys(navigationByRole) as UserRole[]) {
    const groups = navigationByRole[role];
    for (const group of groups) {
      const found = group.items.find((item) => item.href === href);
      if (found) {
        return found.title;
      }
    }
  }

  return null;
};

export default function DashboardBreadcrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  const normalizedPath = pathname.replace(/\/$/, "");
  const lastSegment = segments[segments.length - 1];

  const currentLabel =
    findLabelByHref(normalizedPath) || formatLabel(lastSegment);

  return (
    <h1 className="md:text-lg font-serif font-semibold text-primary">
      {currentLabel}
    </h1>
  );
}
