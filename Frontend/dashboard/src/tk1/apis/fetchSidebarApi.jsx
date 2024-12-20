import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "tkApi1",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/board"}),
  baseQuery: fetchBaseQuery({ baseUrl: "/api/board" }),
  endpoints: (builder) => ({
    fetchSidebarData: builder.query({
      query: () => 'tk',
      transformResponse: (response) => ({
        tempval: response[0].tempval,
        tempmin: response[0].tempmin,
        sky: response[0].sky,
        outp: response[0].outp,
        totalco2: response[0].totalco2,
        capacity: response[0].capacity,
        todaycpg: response[0].todaycpg,
        accmcpg: response[0].accmcpg,
        pwrcpg: [
          response[1].todaycpg,
          response[2].todaycpg,
          response[3].todaycpg,
          response[4].todaycpg,
        ]
      }),
    }),
  }),
})

export const { useFetchSidebarDataQuery } = dataApi;