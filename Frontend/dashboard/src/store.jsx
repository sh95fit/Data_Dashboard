import { configureStore } from "@reduxjs/toolkit"
import dayInfoSlice from "./slice/dayInfoSlice";

import { createLogger } from "redux-logger";

const logger = createLogger({
  predicate: (getState, action) => {
    return action.type !== 'dayinfo/setCurrentDateAndTime';
  }
});

const store = configureStore({
  reducer:{
    dayinfo:dayInfoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();

    if (process.env.NODE_ENV === 'development') {
      middlewares.push(logger);
    }

    return middlewares;
  },
});

export default store;