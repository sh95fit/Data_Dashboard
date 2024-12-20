import { configureStore } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger";

import ikeaDayInfoSlice from "./ikea/slice/dayInfoSlice";
import ikeaDataFieldSlice from "./ikea/slice/dataFieldSlice"
import DensoDayInfoSlice from "./denso/slice/dayInfoSlice";
import DensoDataFieldSlice from "./denso/slice/dataFieldSlice"
import TkDayInfoSlice from "./tk/slice/dayInfoSlice";
import TkDataFieldSlice from "./tk/slice/dataFieldSlice"
import TkDayInfoSlice1 from "./tk1/slice/dayInfoSlice";
import TkDataFieldSlice1 from "./tk1/slice/dataFieldSlice"

import { dataApi as ikeaApi } from './ikea/apis/fetchSidebarApi'
import { dataApi as densoApi } from './denso/apis/fetchSidebarApi'
import { dataApi as tkApi } from './tk/apis/fetchSidebarApi'
import { dataApi as tkApi1 } from './tk1/apis/fetchSidebarApi'

const logger = createLogger({
  predicate: (getState, action) => {
    return action.type !== 'dayinfo/setCurrentDateAndTime';
  }
});

const store = configureStore({
  reducer: {
    dayinfo_ikea: ikeaDayInfoSlice.reducer,
    datafield_ikea: ikeaDataFieldSlice.reducer,
    [ikeaApi.reducerPath]: ikeaApi.reducer,

    dayinfo_denso: DensoDayInfoSlice.reducer,
    datafield_denso: DensoDataFieldSlice.reducer,
    [densoApi.reducerPath]: densoApi.reducer,

    dayinfo_tk: TkDayInfoSlice.reducer,
    datafield_tk: TkDataFieldSlice.reducer,
    [tkApi.reducerPath]: tkApi.reducer,

    dayinfo_tk1: TkDayInfoSlice1.reducer,
    datafield_tk1: TkDataFieldSlice1.reducer,
    [tkApi1.reducerPath]: tkApi1.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ikeaApi.middleware) // dataApi의 미들웨어 추가
      .concat(densoApi.middleware) // dataApi의 미들웨어 추가
      .concat(tkApi.middleware) // dataApi의 미들웨어 추가
      .concat(tkApi1.middleware) // dataApi의 미들웨어 추가
      .concat(process.env.NODE_ENV === 'development' ? [logger] : []), // 개발 환경에서만 로거 추가
});

// store.dispatch(fetchSidebarData());

export default store;