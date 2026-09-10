import { baseApi } from "./baseApi";
import type {
  ApiResponse,
  PaginatedResponse,
  User,
  ReportItem,
  RevenueMetric,
  DashboardKPI,
  ActivityStreamItem,
  CompanyProfile,
} from "./types";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query<ApiResponse<{ kpis: DashboardKPI[]; activities: ActivityStreamItem[] }>, void>({
      query: () => "/admin/dashboard",
      providesTags: ["Dashboard"],
    }),

    getUsers: builder.query<PaginatedResponse<User>, { page?: number; limit?: number; role?: string; search?: string }>({
      query: ({ page = 1, limit = 20, role, search }) => {
        const params = new URLSearchParams({ page: String(page), limit: String(limit) });
        if (role) params.set("role", role);
        if (search) params.set("search", search);
        return `/admin/users?${params.toString()}`;
      },
      providesTags: ["User"],
    }),

    updateUser: builder.mutation<ApiResponse<User>, { id: string; data: Partial<User> }>({
      query: ({ id, data }) => ({
        url: `/admin/users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    deleteUser: builder.mutation<ApiResponse<void>, string>({
      query: (id) => ({
        url: `/admin/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    suspendUser: builder.mutation<ApiResponse<User>, string>({
      query: (id) => ({
        url: `/admin/users/${id}/suspend`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),

    getReports: builder.query<PaginatedResponse<ReportItem>, { page?: number; limit?: number; status?: string }>({
      query: ({ page = 1, limit = 20, status }) => {
        const params = new URLSearchParams({ page: String(page), limit: String(limit) });
        if (status) params.set("status", status);
        return `/admin/reports?${params.toString()}`;
      },
      providesTags: ["Report"],
    }),

    resolveReport: builder.mutation<ApiResponse<ReportItem>, string>({
      query: (reportId) => ({
        url: `/admin/reports/${reportId}/resolve`,
        method: "POST",
      }),
      invalidatesTags: ["Report"],
    }),

    dismissReport: builder.mutation<ApiResponse<ReportItem>, string>({
      query: (reportId) => ({
        url: `/admin/reports/${reportId}/dismiss`,
        method: "POST",
      }),
      invalidatesTags: ["Report"],
    }),

    getRevenueAnalytics: builder.query<ApiResponse<RevenueMetric[]>, { period?: string }>({
      query: ({ period = "monthly" }) => `/admin/analytics/revenue?period=${period}`,
      providesTags: ["Revenue"],
    }),

    getContentModeration: builder.query<ApiResponse<{ pending: number; approved: number; rejected: number }>, void>({
      query: () => "/admin/moderation/stats",
    }),

    verifyCompany: builder.mutation<ApiResponse<CompanyProfile>, string>({
      query: (companyId) => ({
        url: `/admin/companies/${companyId}/verify`,
        method: "POST",
      }),
      invalidatesTags: ["Company"],
    }),

    rejectCompanyVerification: builder.mutation<ApiResponse<CompanyProfile>, string>({
      query: (companyId) => ({
        url: `/admin/companies/${companyId}/reject`,
        method: "POST",
      }),
      invalidatesTags: ["Company"],
    }),

    getSubscriptionTiers: builder.query<ApiResponse<{ tiers: Array<{ id: string; name: string; price: number; features: string[] }> }>, void>({
      query: () => "/admin/subscriptions/tiers",
    }),

    updateSubscriptionTier: builder.mutation<ApiResponse<{ id: string; name: string; price: number }>, { id: string; data: { price?: number; features?: string[] } }>({
      query: ({ id, data }) => ({
        url: `/admin/subscriptions/tiers/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

export const {
  useGetDashboardQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useSuspendUserMutation,
  useGetReportsQuery,
  useResolveReportMutation,
  useDismissReportMutation,
  useGetRevenueAnalyticsQuery,
  useGetContentModerationQuery,
  useVerifyCompanyMutation,
  useRejectCompanyVerificationMutation,
  useGetSubscriptionTiersQuery,
  useUpdateSubscriptionTierMutation,
} = adminApi;
