import React from 'react'
import Card from './Card'

import { useSelector, shallowEqual } from 'react-redux';

import NumberWithComma from '../utils/NumberWithComma'

import { useFetchSidebarDataQuery } from "../apis/fetchSidebarApi";

const DataField = () => {
  const { outp, todaycpg, accmcpg, totalco2, loading, error } = useSelector((state) => state.datafield, shallowEqual);

  return (
    <div className='flex flex-col items-center justify-center h-full gap-5 m-7'>
      <Card>
        <div className='flex justify-between h-full'>
          <div className='flex items-center ml-8 font-bold'>
            <span>현재출력</span>
          </div>
          <div className='flex items-center'>
            <div className='w-full mr-3 text-4xl font-bold'>
              {outp}
            </div>
            <div className='w-8 mt-4 mr-8 font-bold'>
              <span>kW</span>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className='flex justify-between h-full'>
          <div className='flex items-center ml-8 font-bold'>
            <span>금일발전량</span>
          </div>
          <div className='flex items-center'>
            <div className='w-full mr-3 text-4xl font-bold'>
              {/* {todaycpg} */}
              <NumberWithComma value={todaycpg} />
            </div>
            <div className='w-8 mt-4 mr-8 font-bold'>
              <span>kWh</span>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className='flex justify-between h-full'>
          <div className='flex items-center ml-8 font-bold'>
            <span>누적발전량</span>
          </div>
          <div className='flex items-center'>
            <div className='w-full mr-3 text-4xl font-bold'>
              {accmcpg}
            </div>
            <div className='w-8 mt-4 mr-8 font-bold'>
              <span>MWh</span>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className='flex justify-between h-full'>
          <div className='flex items-center ml-8 font-bold'>
            <span>CO2저감량</span>
          </div>
          <div className='flex items-center'>
            <div className='w-full mr-3 text-4xl font-bold'>
              {totalco2}
            </div>
            <div className='flex flex-col w-8 mr-8 text-xs font-bold'>
              <span className='-mb-1'>tCO2eq</span>
              <span className='-mb-2'>/MWh</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default DataField
