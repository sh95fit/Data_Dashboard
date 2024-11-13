import { configureStore } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger";


import dayInfoSlice from "./ikea/slice/dayInfoSlice";
import dataFieldSlice from "./ikea/slice/dataFieldSlice"
import { fetchSidebarData } from './ikea/apis/fetchSidebarThunk';
import { dataApi } from './ikea/apis/fetchSidebarApi'


const logger = createLogger({
  predicate: (getState, action) => {
    return action.type !== 'dayinfo/setCurrentDateAndTime';
  }
});

const store = configureStore({
  reducer:{
    dayinfo:dayInfoSlice.reducer,
    datafield:dataFieldSlice.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(dataApi.middleware) // dataApi의 미들웨어 추가
      .concat(process.env.NODE_ENV === 'development' ? [logger] : []), // 개발 환경에서만 로거 추가
});

// store.dispatch(fetchSidebarData());

export default store;