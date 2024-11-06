import {React} from 'react'

// import { MdSunny } from "react-icons/md";
import WeatherDisplay from './WeatherDisplay';
import RealtimeDate from './RealtimeDate';

import { useSelector, shallowEqual } from 'react-redux';

const DayInfo = () => {
  const currentWeather = useSelector((state) => state.dayinfo.weather, shallowEqual)
  const facilityCapacity = useSelector((state)=> state.dayinfo.facilityCapacity, shallowEqual)

  return (
    <div className='w-full h-full bg-white'>
      <div className="w-full h-[60%] -mb-[25px]">
        <div className='w-full h-full p-8 flex justify-between'>
          <div className='flex-1 w-1/3 flex flex-col items-center justify-center'>
            <RealtimeDate />
          </div>
          <div className='flex-1 w-1/3 flex items-center justify-center'>
            <WeatherDisplay weather={currentWeather} />
          </div>
          <div className='flex-1 w-1/3 flex justify-between items-center relative mr-2'>
            <div className='text-6xl font-extrabold'>
              <span>27°</span>
            </div>
            <div className='mt-8 text-2xl text-gray-400 absolute transform left-[70%]'>
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40%] -mb-[300px] flex p-8">
        <div className='flex w-full h-full justify-between items-center'>
          <div className='flex items-center justify-center text-base ml-4 mt-2 font-extrabold'>
            <span>설비용량</span>
          </div>
          <div className='flex items-center'>
            <div className='mr-2 w-full font-extrabold text-5xl'>
              {facilityCapacity}
            </div>
            <div className='text-3xl mt-4 font-extrabold mr-8 w-8'>
              <span>kW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayInfo
