import {React} from 'react'

// import { MdSunny } from "react-icons/md";
// import WeatherDisplay from './WeatherDisplay';
import RealtimeDate from './RealtimeDate';

// import { useSelector, shallowEqual } from 'react-redux';

import { useFetchSidebarDataQuery } from '../apis/fetchSidebarApi'

const DayInfo = () => {
  // const currentWeather = useSelector((state) => state.dayinfo.weather, shallowEqual)
  // const { facilityCapacity, tempval, tempmin, sky, loading, error } = useSelector((state) => state.dayinfo, shallowEqual);

  const { data, error, isLoading } = useFetchSidebarDataQuery();

  const sky = data?.sky ?? "images/weather/sun.svg";
  const tempval = data?.tempval ?? 0;
  const tempmin = data?.tempmin ?? 0;
  const facilityCapacity = data?.capacity ?? '910.56';
  const loading = data?.isLoading ?? false;
  const err = data?.error ?? null;

  return (
    <div className='w-full h-full bg-white'>
      <div className="w-full h-[60%] -mb-[25px]">
        <div className='flex justify-between w-full h-full p-8'>
          <div className='flex flex-col items-center justify-center flex-1 w-1/3'>
            <RealtimeDate />
          </div>
          <div className='flex items-center justify-center flex-1 w-1/3'>
            {/* <WeatherDisplay weather={currentWeather} /> */}
            <img src={sky} alt="Weather" className='p-5' />
          </div>
          <div className='relative flex items-center justify-between flex-1 w-1/3 mr-2'>
            <div className='ml-3 text-6xl font-bold'>
              <span>{tempval}°</span>
              {/* <span>27°</span> */}
            </div>
            <div className='mt-6 text-2xl text-gray-400 absolute transform left-[70%] ml-3'>
              <span>{tempmin}</span>
              {/* <span>20</span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40%] -mb-[300px] flex p-8">
        <div className='flex items-center justify-between w-full h-full'>
          <div className='flex items-center justify-center mt-2 ml-4 text-base font-extrabold'>
            <span>설비용량</span>
          </div>
          <div className='flex items-center'>
            <div className='w-full mr-2 text-5xl font-bold'>
              {facilityCapacity}
            </div>
            <div className='w-8 mt-4 mr-8 text-3xl font-bold'>
              <span>kW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayInfo
