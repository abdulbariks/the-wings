import { baseApi } from "./baseApi";
import type {
  ApiResponse,
  PaginatedResponse,
  DancerProfile,
  MatchItem,
  ApplicationItem,
  CompanyProfile,
} from "./types";

export const dancerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<ApiResponse<DancerProfile>, void>({
      query: () => "/dancer/profile",
      providesTags: ["Dancer"],
    }),

    updateProfile: builder.mutation<ApiResponse<DancerProfile>, Partial<DancerProfile>>({
      query: (data) => ({
        url: "/dancer/profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Dancer"],
    }),

    getMatches: builder.query<PaginatedResponse<MatchItem>, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 20 }) => `/dancer/matches?page=${page}&limit=${limit}`,
      providesTags: ["Match"],
    }),

    acceptMatch: builder.mutation<ApiResponse<MatchItem>, string>({
      query: (matchId) => ({
        url: `/dancer/matches/${matchId}/accept`,
        method: "POST",
      }),
      invalidatesTags: ["Match"],
    }),

    rejectMatch: builder.mutation<ApiResponse<MatchItem>, string>({
      query: (matchId) => ({
        url: `/dancer/matches/${matchId}/reject`,
        method: "POST",
      }),
      invalidatesTags: ["Match"],
    }),

    getGreenLights: builder.query<PaginatedResponse<ApplicationItem>, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 20 }) => `/dancer/green-lights?page=${page}&limit=${limit}`,
      providesTags: ["Application"],
    }),

    sendGreenLight: builder.mutation<ApiResponse<ApplicationItem>, { companyId: string; note?: string }>({
      query: (body) => ({
        url: "/dancer/green-lights",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Application"],
    }),

    revokeGreenLight: builder.mutation<ApiResponse<void>, string>({
      query: (applicationId) => ({
        url: `/dancer/green-lights/${applicationId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Application"],
    }),

    getSavedProfiles: builder.query<PaginatedResponse<CompanyProfile>, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 20 }) => `/dancer/saved?page=${page}&limit=${limit}`,
      providesTags: ["Company"],
    }),

    saveProfile: builder.mutation<ApiResponse<void>, string>({
      query: (companyId) => ({
        url: "/dancer/saved",
        method: "POST",
        body: { companyId },
      }),
      invalidatesTags: ["Company"],
    }),

    unsaveProfile: builder.mutation<ApiResponse<void>, string>({
      query: (companyId) => ({
        url: `/dancer/saved/${companyId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Company"],
    }),

    browseCompanies: builder.query<PaginatedResponse<CompanyProfile>, { page?: number; limit?: number; search?: string }>({
      query: ({ page = 1, limit = 20, search }) =>
        `/dancer/companies?page=${page}&limit=${limit}${search ? `&search=${encodeURIComponent(search)}` : ""}`,
      providesTags: ["Company"],
    }),

    getSubscription: builder.query<ApiResponse<{ plan: string; status: string; expiresAt: string }>, void>({
      query: () => "/dancer/subscription",
    }),

    updateSubscription: builder.mutation<ApiResponse<{ plan: string }>, { planId: string }>({
      query: (data) => ({
        url: "/dancer/subscription",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetMatchesQuery,
  useAcceptMatchMutation,
  useRejectMatchMutation,
  useGetGreenLightsQuery,
  useSendGreenLightMutation,
  useRevokeGreenLightMutation,
  useGetSavedProfilesQuery,
  useSaveProfileMutation,
  useUnsaveProfileMutation,
  useBrowseCompaniesQuery,
  useGetSubscriptionQuery,
  useUpdateSubscriptionMutation,
} = dancerApi;
