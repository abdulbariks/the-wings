"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { UserRole } from "@/components/dashboard/types/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamically resolve role from route path
  let role: UserRole = "dancer";
  if (pathname.startsWith("/admin-dashboard")) {
    role = "admin";
  } else if (pathname.startsWith("/company-dashboard")) {
    role = "company";
  } else if (pathname.startsWith("/dancer-dashboard")) {
    role = "dancer";
  }

  return (
    <div className="min-h-screen flex bg-[#f8f8f8]">
      {/* Sidebar Component */}
      <Sidebar
        role={role}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar Component */}
        <Topbar role={role} onOpenMobileMenu={() => setMobileMenuOpen(true)} />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
