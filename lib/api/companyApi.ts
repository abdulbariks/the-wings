import { baseApi } from "./baseApi";
import type {
  ApiResponse,
  PaginatedResponse,
  DancerProfile,
  ApplicationItem,
  MatchItem,
  AuditionInvite,
  CompanyProfile,
} from "./types";

export const companyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<ApiResponse<CompanyProfile>, void>({
      query: () => "/company/profile",
      providesTags: ["Company"],
    }),

    updateProfile: builder.mutation<
      ApiResponse<CompanyProfile>,
      Partial<CompanyProfile>
    >({
      query: (data) => ({
        url: "/company/profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Company"],
    }),

    unpublishProfile: builder.mutation<ApiResponse<void>, void>({
      query: () => ({
        url: "/company/profile/publish",
        method: "DELETE",
      }),
      invalidatesTags: ["Company"],
    }),

    browseDancers: builder.query<
      PaginatedResponse<DancerProfile>,
      { page?: number; limit?: number; search?: string; skills?: string[] }
    >({
      query: ({ page = 1, limit = 20, search, skills }) => {
        const params = new URLSearchParams({
          page: String(page),
          limit: String(limit),
        });
        if (search) params.set("search", search);
        if (skills?.length) params.set("skills", skills.join(","));
        return `/company/dancers?${params.toString()}`;
      },
      providesTags: ["Dancer"],
    }),

    getDancerProfile: builder.query<ApiResponse<DancerProfile>, string>({
      query: (dancerId) => `/company/dancers/${dancerId}`,
      providesTags: ["Dancer"],
    }),

    shortlistDancer: builder.mutation<ApiResponse<void>, string>({
      query: (dancerId) => ({
        url: "/company/shortlist",
        method: "POST",
        body: { dancerId },
      }),
      invalidatesTags: ["Company"],
    }),

    removeFromShortlist: builder.mutation<ApiResponse<void>, string>({
      query: (dancerId) => ({
        url: `/company/shortlist/${dancerId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Company"],
    }),

    getShortlist: builder.query<
      PaginatedResponse<DancerProfile>,
      { page?: number; limit?: number }
    >({
      query: ({ page = 1, limit = 20 }) =>
        `/company/shortlist?page=${page}&limit=${limit}`,
      providesTags: ["Dancer"],
    }),

    sendGreenLight: builder.mutation<
      ApiResponse<ApplicationItem>,
      { dancerId: string; roleTitle: string; note?: string }
    >({
      query: (body) => ({
        url: "/company/green-lights",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Application"],
    }),

    getSentGreenLights: builder.query<
      PaginatedResponse<ApplicationItem>,
      { page?: number; limit?: number }
    >({
      query: ({ page = 1, limit = 20 }) =>
        `/company/green-lights?page=${page}&limit=${limit}`,
      providesTags: ["Application"],
    }),

    getMatches: builder.query<
      PaginatedResponse<MatchItem>,
      { page?: number; limit?: number }
    >({
      query: ({ page = 1, limit = 20 }) =>
        `/company/matches?page=${page}&limit=${limit}`,
      providesTags: ["Match"],
    }),

    sendAuditionInvite: builder.mutation<
      ApiResponse<AuditionInvite>,
      {
        dancerId: string;
        title: string;
        description: string;
        date: string;
        location: string;
      }
    >({
      query: (body) => ({
        url: "/company/auditions",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Audition"],
    }),

    getAuditionInvites: builder.query<
      PaginatedResponse<AuditionInvite>,
      { page?: number; limit?: number }
    >({
      query: ({ page = 1, limit = 20 }) =>
        `/company/auditions?page=${page}&limit=${limit}`,
      providesTags: ["Audition"],
    }),

    cancelAudition: builder.mutation<ApiResponse<void>, string>({
      query: (auditionId) => ({
        url: `/company/auditions/${auditionId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Audition"],
    }),

    getDashboard: builder.query<
      ApiResponse<{
        newApplications: ApplicationItem[];
        shortlisted: DancerProfile[];
        stats: {
          totalApplications: number;
          totalShortlisted: number;
          totalAuditions: number;
        };
      }>,
      void
    >({
      query: () => "/company/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUnpublishProfileMutation,
  useBrowseDancersQuery,
  useGetDancerProfileQuery,
  useShortlistDancerMutation,
  useRemoveFromShortlistMutation,
  useGetShortlistQuery,
  useSendGreenLightMutation,
  useGetSentGreenLightsQuery,
  useGetMatchesQuery,
  useSendAuditionInviteMutation,
  useGetAuditionInvitesQuery,
  useCancelAuditionMutation,
  useGetDashboardQuery,
} = companyApi;
