import { createSlice } from "@reduxjs/toolkit"

import { fetchSidebarData } from "../apis/fetchSidebarThunk";

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchSidebarData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSidebarData.fulfilled, (state, action) => {
        state.loading = false;

        state.outp = action.payload.outp;
        state.totalco2 = action.payload.totalco2;
        state.todaycpg = action.payload.todaycpg;
        state.accmcpg = action.payload.accmcpg;
      })
      .addCase(fetchSidebarData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataFieldSlice;