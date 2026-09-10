export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "dancer" | "company";
  image?: string;
  phone?: string;
  location?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role: "dancer" | "company";
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface DancerProfile {
  id: string;
  userId: string;
  bio?: string;
  rank?: string;
  repertoire?: string[];
  experience?: number;
  availability?: boolean;
  videos?: string[];
  images?: string[];
}

export interface CompanyProfile {
  id: string;
  userId: string;
  companyName: string;
  description?: string;
  industry?: string;
  location?: string;
  website?: string;
  logo?: string;
  isVerified: boolean;
  isPublished: boolean;
}

export interface MatchItem {
  id: string;
  dancerId: string;
  companyId: string;
  status: "pending" | "accepted" | "rejected";
  matchScore: number;
  createdAt: string;
}

export interface ApplicationItem {
  id: string;
  dancerId: string;
  companyId: string;
  roleTitle: string;
  note?: string;
  status: "pending" | "reviewed" | "accepted" | "rejected";
  date: string;
}

export interface AuditionInvite {
  id: string;
  companyId: string;
  dancerId: string;
  title: string;
  description: string;
  date: string;
  location: string;
  status: "pending" | "accepted" | "declined";
  createdAt: string;
}

export interface ReportItem {
  id: string;
  reporterId: string;
  reportedId: string;
  reason: string;
  description?: string;
  status: "pending" | "resolved" | "dismissed";
  createdAt: string;
}

export interface RevenueMetric {
  id: string;
  label: string;
  value: number;
  change: number;
  period: string;
}

export interface DashboardKPI {
  title: string;
  value: string;
  badge?: string;
  icon?: string;
}

export interface ActivityStreamItem {
  id: string;
  title: string;
  details: string;
  timeAgo: string;
}
