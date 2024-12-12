import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "ikeaApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/board"}),
  baseQuery: fetchBaseQuery({ baseUrl: "/api/board"}),
  endpoints: (builder) => ({
    fetchSidebarData: builder.query({
      query: () => 'ikea',
      transformResponse: (response) => ({
        tempval: response.tempval,
        tempmin: response.tempmin,
        sky: response.sky,
        outp: response.outp,
        totalco2: response.totalco2,
        capacity: response.capacity,
        todaycpg: response.todaycpg,
        accmcpg: response.accmcpg,
      }),
    }),
  }),
})

export const { useFetchSidebarDataQuery } = dataApi;