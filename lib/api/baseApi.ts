import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as { auth?: { token?: string } }).auth?.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: [
    "User",
    "Dancer",
    "Company",
    "Admin",
    "Match",
    "Application",
    "Audition",
    "Report",
    "Revenue",
    "Dashboard",
  ],
  endpoints: () => ({}),
});

export { baseQuery };
