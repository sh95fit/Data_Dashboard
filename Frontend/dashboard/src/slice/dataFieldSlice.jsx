import { createSlice } from "@reduxjs/toolkit"

import { fetchSidebarData } from "../apis/fetchSidebarThunk";

import { dataApi } from "../apis/fetchSidebarApi";

const dataFieldSlice = createSlice({
  name: 'datafield',  // Slice의 이름 정의

  initialState:{
    outp: 0,
    totalco2: 0,
    todaycpg: 0,
    accmcpg: 0,
    loading: false,
    error: null,
  }, // 초기값

  reducers:{
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchSidebarData.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchSidebarData.fulfilled, (state, action) => {
  //       state.loading = false;

  //       state.outp = action.payload.outp;
  //       state.totalco2 = action.payload.totalco2;
  //       state.todaycpg = action.payload.todaycpg;
  //       state.accmcpg = action.payload.accmcpg;
  //     })
  //     .addCase(fetchSidebarData.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
  // },
  extraReducers: (builder) => {
    // builder
    //   .addMatcher(
    //     dataApi.endpoints.fetchSidebarData.matchFulfilled,
    //     (state, action) => {
    //       state.outp = action.payload.outp;
    //       state.totalco2 = action.payload.totalco2;
    //       state.todaycpg = action.payload.todaycpg;
    //       state.accmcpg = action.payload.accmcpg;
    //       state.loading = false;
    //     }
    //   )
    //   .addMatcher(
    //     dataApi.endpoints.fetchSidebarData.matchPending,
    //     (state) => {
    //       state.loading = true;
    //     }
    //   )
    //   .addMatcher(
    //     dataApi.endpoints.fetchSidebarData.matchRejected,
    //     (state, action) => {
    //       state.loading = false;
    //       state.error = action.error.message;
    //     }
    //   );
    builder
      .addMatcher(
        // 모든 'fetchSidebarData' 요청의 상태를 공통적으로 처리
        (action) => dataApi.endpoints.fetchSidebarData.matchPending(action) ||
                    dataApi.endpoints.fetchSidebarData.matchFulfilled(action) ||
                    dataApi.endpoints.fetchSidebarData.matchRejected(action),
        (state, action) => {
          if (dataApi.endpoints.fetchSidebarData.matchPending(action)) {
            state.loading = true;
          }
          if (dataApi.endpoints.fetchSidebarData.matchFulfilled(action)) {
            state.loading = false;
            state.outp = action.payload.outp;
            state.totalco2 = action.payload.totalco2;
            state.todaycpg = action.payload.todaycpg;
            state.accmcpg = action.payload.accmcpg;
          }
          if (dataApi.endpoints.fetchSidebarData.matchRejected(action)) {
            state.loading = false;
            state.error = action.error.message;
          }
        }
      );
  }
});

export default dataFieldSlice;