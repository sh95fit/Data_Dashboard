import { createSlice } from "@reduxjs/toolkit"
import { dataApi } from "../apis/fetchSidebarApi";

const dataFieldSlice = createSlice({
  name: 'datafield_tk1',  // Slice의 이름 정의

  initialState: {
    outp: 0,
    totalco2: 0.,
    todaycpg: 0,
    accmcpg: 0,
    pwrcpg: [0., 0., 0., 0.],
    loading: false,
    error: null,
  }, // 초기값
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => dataApi.endpoints.fetchSidebarData.matchPending(action) ||
          dataApi.endpoints.fetchSidebarData.matchFulfilled(action) ||
          dataApi.endpoints.fetchSidebarData.matchRejected(action),
        (state, action) => {
          if (dataApi.endpoints.fetchSidebarData.matchPending(action)) {
            state.loading = true;
          }
          if (dataApi.endpoints.fetchSidebarData.matchFulfilled(action)) {
            state.loading = false;
            if(action.payload){
              state.outp = action.payload.outp !== null ? action.payload.outp : state.outp;
              state.totalco2 = action.payload.totalco2 !== null ? action.payload.totalco2 : state.totalco2;
              state.todaycpg = action.payload.todaycpg !== null ? action.payload.todaycpg : state.todaycpg;
              state.accmcpg = action.payload.accmcpg !== null ? action.payload.accmcpg : state.accmcpg;
              state.pwrcpg = action.payload.pwrcpg !== null ? action.payload.pwrcpg : state.pwrcpg;
            }
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