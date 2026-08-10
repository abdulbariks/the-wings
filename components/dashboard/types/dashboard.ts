export type UserRole = "dancer" | "company" | "admin";

export interface NavItem {
  title: string;
  href: string;
  icon: string;
}

export interface NavGroup {
  section: string;
  items: NavItem[];
}

export interface MetricCard {
  title: string;
  value: string;
  badge?: string;
  icon?: string;
}

export interface ApplicationItem {
  id: string;
  companyName: string;
  roleTitle: string;
  note: string;
  date: string;
  status: string;
}

export interface ShortlistedDancer {
  id: string;
  name: string;
  title: string;
  location: string;
  initial: string;
}

export interface ScheduleItem {
  id: string;
  day: string;
  month: string;
  title: string;
  location: string;
  type: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  details: string;
  timeAgo: string;
}

export interface ApplicationApplicant {
  id: string;
  name: string;
  role: string;
  matchScore: string;
}
