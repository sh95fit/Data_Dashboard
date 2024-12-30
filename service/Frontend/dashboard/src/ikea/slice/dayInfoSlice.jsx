import { createSlice } from "@reduxjs/toolkit"
import { dataApi } from "../apis/fetchSidebarApi";

const dayInfoSlice = createSlice({
  name: 'dayinfo_ikea',

  initialState:{
    // weather:"sunny",
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

  reducers:{
    setCurrentDateAndTime: (state, action) => {
      state.currentDate = action.payload.currentDate || state.currentDate;
      state.currentDay = action.payload.currentDay || state.currentDay;
      state.currentTime = action.payload.currentTime || state.currentTime;
    },
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
              state.tempval = action.payload.tempval !== null ? action.payload.tempval : state.tempval;
              state.tempmin = action.payload.tempmin !== null ? action.payload.tempmin : state.tempmin;
              state.sky = action.payload.sky !== null ? action.payload.sky : state.sky;
            }
          }
          if (dataApi.endpoints.fetchSidebarData.matchRejected(action)) {
            state.loading = false;
            state.error = action.error.message;
          }
        }
      )
  }
});

export const { setCurrentDateAndTime } = dayInfoSlice.actions;
export default dayInfoSlice;