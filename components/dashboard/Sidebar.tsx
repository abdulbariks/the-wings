"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRole } from "./types/dashboard";
import { navigationByRole } from "./data/dashboard-data";
import { IconRenderer } from "./icon-renderer";
import { LogOut, PanelRightOpen } from "lucide-react";

interface SidebarProps {
  role: UserRole;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ role, isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();
  const navGroups = navigationByRole[role] || [];

  const navContent = (
    <div className="flex flex-col h-full bg-[#111111] text-white w-75 py-6 justify-between">
      {/* Brand Header */}
      <div className="flex items-center justify-between lg:justify-center py-2 mb-6 w-full px-6">
        <Link href={"/"}>
          <h1 className="text-3xl font-serif text-center font-medium text-white">
            TILE WINGS
          </h1>
        </Link>

        <button
          className="lg:hidden text-zinc-400 hover:text-white"
          onClick={onClose}
        >
          <PanelRightOpen className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Groups */}
      <div className="px-6 overflow-y-auto">
        <nav className="space-y-6 ">
          {navGroups.map((group) => (
            <div key={group.section}>
              <h2 className="px-2 text-xs font-semibold font-serif text-muted uppercase tracking-widest mb-3">
                {group.section}
              </h2>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center gap-3 px-4 py-3.5 font-medium transition-colors ${
                          isActive
                            ? "bg-zinc-200 text-black font-semibold"
                            : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
                        }`}
                      >
                        <IconRenderer name={item.icon} className=" shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="pt-4 border-t border-zinc-800 px-6">
        <button className="w-full flex items-center gap-3 px-4 py-3.5 cursor-pointer rounded-md text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/40 transition-colors">
          <LogOut className=" shrink-0" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block h-screen sticky top-0 shrink-0 border-r border-zinc-900">
        {navContent}
      </aside>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden flex transition-[visibility] duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={onClose}
        />
        <aside
          className={`relative z-50 h-full transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {navContent}
        </aside>
      </div>
    </>
  );
};
