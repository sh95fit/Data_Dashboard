import { configureStore } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger";

import ikeaDayInfoSlice from "./ikea/slice/dayInfoSlice";
import ikeaDataFieldSlice from "./ikea/slice/dataFieldSlice"
import DensoDayInfoSlice from "./denso/slice/dayInfoSlice";
import DensoDataFieldSlice from "./denso/slice/dataFieldSlice"

import { dataApi as ikeaApi } from './ikea/apis/fetchSidebarApi'
import { dataApi as densoApi } from './denso/apis/fetchSidebarApi'


const logger = createLogger({
  predicate: (getState, action) => {
    return action.type !== 'dayinfo/setCurrentDateAndTime';
  }
});

const store = configureStore({
  reducer:{
    dayinfo_ikea:ikeaDayInfoSlice.reducer,
    datafield_ikea:ikeaDataFieldSlice.reducer,
    [ikeaApi.reducerPath]: ikeaApi.reducer,
    dayinfo_denso:DensoDayInfoSlice.reducer,
    datafield_denso:DensoDataFieldSlice.reducer,
    [densoApi.reducerPath]: densoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ikeaApi.middleware) // dataApi의 미들웨어 추가
      .concat(densoApi.middleware) // dataApi의 미들웨어 추가
      .concat(process.env.NODE_ENV === 'development' ? [logger] : []), // 개발 환경에서만 로거 추가
});

export default store;