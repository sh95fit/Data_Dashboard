import { createSlice } from "@reduxjs/toolkit"

import { fetchSidebarData } from "../apis/fetchSidebarThunk";

const dayInfoSlice = createSlice({
  name: 'dayinfo',  // Slice의 이름 정의

  initialState:{
    weather:"sunny",
    currentDate:'',
    currentDay:'',
    currentTime:'',
    facilityCapacity: '910.56'
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
  }
});

export const {setWeather, setCurrentDateAndTime, setFacilityCapacity} = dayInfoSlice.actions;
// export const {setWeather, setCurrentDate, setCurrentDay, setCurrentTime} = dayInfoSlice.actions;
export default dayInfoSlice;