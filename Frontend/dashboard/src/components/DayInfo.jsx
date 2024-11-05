import React from 'react'

import { MdSunny } from "react-icons/md";

const DayInfo = () => {
  return (
    <div className='w-full h-full bg-white'>
      <div className="w-full h-[60%] -mb-[25px]">
        <div className='w-full h-full p-8 flex justify-between'>
          <div className='flex-1 w-1/3 flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center text-md'>
              2024.11.05
            </div>
            <div className='flex items-center justify-center text-3xl font-extrabold'>
              MON
            </div>
          </div>
          <div className='flex-1 w-1/3 flex items-center justify-center'>
            <div className='flex items-center justify-center text-6xl text-yellow-400'>
              <MdSunny />
            </div>
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
          <div className='flex items-center justify-center text-xl ml-4 mt-2 font-extrabold'>
            <span>설비용량</span>
          </div>
          <div className='flex items-center'>
            <div className='mr-3 w-full font-extrabold text-5xl'>
              1,513
            </div>
            <div className='text-3xl mt-6 font-extrabold mr-8 w-8'>
              <span>kW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayInfo
