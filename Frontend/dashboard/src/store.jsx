import { configureStore } from "@reduxjs/toolkit"
import dayInfoSlice from "./slice/dayInfoSlice";
import dataFieldSlice from "./slice/dataFieldSlice"

import { createLogger } from "redux-logger";

import { fetchSidebarData } from './apis/fetchSidebarThunk';

const logger = createLogger({
  predicate: (getState, action) => {
    return action.type !== 'dayinfo/setCurrentDateAndTime';
  }
});

const store = configureStore({
  reducer:{
    dayinfo:dayInfoSlice.reducer,
    datafield:dataFieldSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();

    if (process.env.NODE_ENV === 'development') {
      middlewares.push(logger);
    }

    return middlewares;
  },
});

store.dispatch(fetchSidebarData());

export default store;