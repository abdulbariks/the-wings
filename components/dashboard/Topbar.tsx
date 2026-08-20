"use client";

import { Bell, Sun, Menu } from "lucide-react";
import { UserRole } from "./types/dashboard";
import DashboardProfileDropdown from "./DashboardProfileDropdown";
import { UserProp } from "@/types/User";
import DashboardBreadcrumb from "./DashboardBreadcrumb";

interface TopbarProps {
  role: UserRole;
  onOpenMobileMenu: () => void;
}

const roleDataMap = {
  admin: {
    title: "Platform Control Overview",
    user: "Madun Laduni",
    sub: "Admin",
  },
  company: { title: "Dashboard", user: "Madun Laduni", sub: "Company" },
  dancer: { title: "Dashboard", user: "Madun Laduni", sub: "Dancer" },
};

const user: UserProp = {
  name: "Madun Laduni",
  email: "manun@gmail.com",
  image: "",
  role: "admin",
};

export const Topbar = ({ role, onOpenMobileMenu }: TopbarProps) => {
  const current = roleDataMap[role];

  return (
    <header className="px-6 py-3 border-b border-zinc-200 bg-white flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-md"
        >
          <Menu className="w-5 h-5" />
        </button>
        <DashboardBreadcrumb />
      </div>

      <div className="flex items-center gap-4">
        {role === "admin" && (
          <button className="p-2 text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors">
            <Sun className="w-4 h-4" />
          </button>
        )}
        <button className="size-10 md:size-12 flex items-center justify-center border outline-none focus-visible:ring-2 bg-[#F4F4F2] focus-visible:ring-gray-400 cursor-pointer">
          <Bell />
        </button>

        <DashboardProfileDropdown user={user} />
      </div>
    </header>
  );
};
