import { createSlice } from "@reduxjs/toolkit"

import { fetchSidebarData } from "../apis/fetchSidebarThunk";

const dayInfoSlice = createSlice({
  name: 'dayinfo',  // Slice의 이름 정의

  initialState:{
    weather:"sunny",
    currentDate:'',
    currentDay:'',
    currentTime:'',
    facilityCapacity: '910.56',
    tempval: 0,
    tempmin: 0,
    sky: "images/weather/sun.svg",
    loading: false,
    error: null,
  }, // 초기값

  reducers:{    // reducer 복수형!
    setWeather:(state, action) => {
      state.weather = action.payload;
    },
    setCurrentDateAndTime: (state, action) => {
      state.currentDate = action.payload.currentDate;
      state.currentDay = action.payload.currentDay;
      state.currentTime = action.payload.currentTime;
    },
    setFacilityCapacity: (state, action) => {
      state.facilityCapacity = action.payload;
    }
    // setCurrentDate:(state, action) => {
    //   state.currentDate = action.payload;
    // },
    // setCurrentDay:(state, action) => {
    //   state.currentDay = action.payload;
    // },
    // setCurrentTime:(state, action) => {
    //   state.currentTime = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSidebarData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSidebarData.fulfilled, (state, action) => {
        state.loading = false;
        // tempval과 skyval만 저장
        state.tempval = action.payload.tempval;
        state.tempmin = action.payload.tempmin;
        state.sky = action.payload.sky;
      })
      .addCase(fetchSidebarData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {setWeather, setCurrentDateAndTime, setFacilityCapacity} = dayInfoSlice.actions;
// export const {setWeather, setCurrentDate, setCurrentDay, setCurrentTime} = dayInfoSlice.actions;
export default dayInfoSlice;