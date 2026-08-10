"use client";

import { Bell, Sun, Menu, ChevronDown } from "lucide-react";
import { UserRole } from "./types/dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

export const Topbar = ({ role, onOpenMobileMenu }: TopbarProps) => {
  const current = roleDataMap[role];

  return (
    <header className="h-16 border-b border-zinc-200 bg-white px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-md"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-sm font-serif font-medium text-zinc-900">
          {current.title}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {role === "admin" && (
          <button className="p-2 text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors">
            <Sun className="w-4 h-4" />
          </button>
        )}
        <button className="p-2 text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors relative">
          <Bell className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 border-l border-zinc-200 pl-4">
          <Avatar className="w-8 h-8 rounded-sm">
            <AvatarImage src="/avatars/user.jpg" alt={current.user} />
            <AvatarFallback className="rounded-sm bg-zinc-200 text-xs">
              ML
            </AvatarFallback>
          </Avatar>
          <div className="text-left hidden sm:block">
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-zinc-900">
                {current.user}
              </span>
              <ChevronDown className="w-3 h-3 text-zinc-400" />
            </div>
            <p className="text-[10px] text-zinc-500 capitalize">
              {current.sub}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
