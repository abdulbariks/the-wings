import { NavGroup, UserRole } from "../types/dashboard";

export const navigationByRole: Record<UserRole, NavGroup[]> = {
  admin: [
    {
      section: "CONTROL NAVIGATION",
      items: [
        {
          title: "Dashboard",
          href: "/admin-dashboard",
          icon: "LayoutDashboard",
        },
        {
          title: "User Management",
          href: "/admin-dashboard/user-management",
          icon: "Users",
        },
      ],
    },
    {
      section: "TRUST & SAFETY",
      items: [
        {
          title: "Company Verification",
          href: "/admin-dashboard/company-verification",
          icon: "Building",
        },
        {
          title: "Content Moderation",
          href: "/admin-dashboard/content-moderation",
          icon: "ShieldAlert",
        },
        {
          title: "Reports & Flags",
          href: "/admin-dashboard/reports-flags",
          icon: "Flag",
        },
      ],
    },
    {
      section: "COMMERCE",
      items: [
        {
          title: "Subscription & Tier",
          href: "/admin-dashboard/subscription-tier",
          icon: "CreditCard",
        },
        {
          title: "Revenue Analytics",
          href: "/admin-dashboard/revenue-analytics",
          icon: "TrendingUp",
        },
        {
          title: "Marketplace",
          href: "/admin-dashboard/marketplace",
          icon: "Store",
        },
      ],
    },
  ],
  company: [
    {
      section: "OVERVIEW & ANALYTICS",
      items: [
        {
          title: "Dashboard",
          href: "/company-dashboard",
          icon: "LayoutDashboard",
        },
      ],
    },
    {
      section: "PROFILE & PORTFOLIO",
      items: [
        {
          title: "Public Profile",
          href: "/company-dashboard/public-profile",
          icon: "User",
        },
        {
          title: "Edit Profile",
          href: "/company-dashboard/edit-profile",
          icon: "Edit3",
        },
      ],
    },
    {
      section: "RECRUITMENT & MATCHING",
      items: [
        {
          title: "Browse Dancers",
          href: "/company-dashboard/browse-dancers",
          icon: "Search",
        },
        {
          title: "Sent Green Lights",
          href: "/company-dashboard/sent-green-lights",
          icon: "Send",
        },
        { title: "Matches", href: "/company-dashboard/matches", icon: "Heart" },
        {
          title: "Audition Invites",
          href: "/company-dashboard/audition-invites",
          icon: "Calendar",
        },
      ],
    },
    {
      section: "CONTROLL",
      items: [
        {
          title: "Settings",
          href: "/company-dashboard/settings",
          icon: "Settings",
        },
      ],
    },
  ],
  dancer: [
    {
      section: "OVERVIEW & ANALYTICS",
      items: [
        {
          title: "Dashboard",
          href: "/dancer-dashboard",
          icon: "LayoutDashboard",
        },
      ],
    },
    {
      section: "PROFILE & PORTFOLIO",
      items: [
        {
          title: "Public Profile",
          href: "/dancer-dashboard/public-profile",
          icon: "User",
        },
        {
          title: "Edit Profile",
          href: "/dancer-dashboard/edit-profile",
          icon: "Edit3",
        },
      ],
    },
    {
      section: "RECRUITMENT & MATCHING",
      items: [
        {
          title: "Browse Companies",
          href: "/dancer-dashboard/browse-companies",
          icon: "Search",
        },
        {
          title: "Sent Green Lights",
          href: "/dancer-dashboard/sent-green-lights",
          icon: "Send",
        },
        { title: "Matches", href: "/dancer-dashboard/matches", icon: "Heart" },
        {
          title: "Saved Profiles",
          href: "/dancer-dashboard/saved-profiles",
          icon: "Bookmark",
        },
      ],
    },
    {
      section: "ACCOUNT & PLAN",
      items: [
        {
          title: "Subscription",
          href: "/dancer-dashboard/subscription",
          icon: "CreditCard",
        },
        {
          title: "Settings",
          href: "/dancer-dashboard/settings",
          icon: "Settings",
        },
      ],
    },
  ],
};
