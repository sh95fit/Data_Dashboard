import React from 'react'
import Card from './Card'

import { useSelector, shallowEqual } from 'react-redux';

import NumberWithComma from '../utils/NumberWithComma'

const DataField = () => {
  const outp = useSelector((state) => state.datafield.outp, shallowEqual)
  const todaycpg = useSelector((state) => state.datafield.todaycpg, shallowEqual)
  const accmcpg = useSelector((state) => state.datafield.accmcpg, shallowEqual)
  const totalco2 = useSelector((state) => state.datafield.totalco2, shallowEqual)

  return (
    <div className='flex flex-col items-center justify-center h-full m-7 gap-5'>
      <Card>
        <div className='flex h-full justify-between'>
          <div className='flex items-center ml-8 font-bold'>
            <span>현재출력</span>
          </div>
          <div className='flex items-center'>
            <div className='mr-3 w-full font-bold text-4xl'>
              {outp}
            </div>
            <div className='mt-4 font-bold mr-8 w-8'>
              <span>kW</span>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className='flex h-full justify-between'>
          <div className='flex items-center ml-8 font-bold'>
            <span>금일발전량</span>
          </div>
          <div className='flex items-center'>
            <div className='mr-3 w-full font-bold text-4xl'>
              {/* {todaycpg} */}
              <NumberWithComma value={todaycpg} />
            </div>
            <div className='mt-4 font-bold mr-8 w-8'>
              <span>kWh</span>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className='flex h-full justify-between'>
          <div className='flex items-center ml-8 font-bold'>
            <span>누적발전량</span>
          </div>
          <div className='flex items-center'>
            <div className='mr-3 w-full font-bold text-4xl'>
              {accmcpg}
            </div>
            <div className='mt-4 font-bold mr-8 w-8'>
              <span>MWh</span>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className='flex h-full justify-between'>
          <div className='flex items-center ml-8 font-bold'>
            <span>CO2저감량</span>
          </div>
          <div className='flex items-center'>
            <div className='mr-3 w-full font-bold text-4xl'>
              {totalco2}
            </div>
            <div className='text-xs font-bold mr-8 w-8 flex flex-col'>
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
