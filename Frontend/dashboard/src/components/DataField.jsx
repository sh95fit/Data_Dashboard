import React from 'react'
import Card from './Card'


const DataField = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full m-7 gap-5'>
      <Card>
        <div className='flex h-full justify-between'>
          <div className='flex items-center ml-8 font-bold'>
            <span>현재출력</span>
          </div>
          <div className='flex items-center'>
            <div className='mr-3 w-full font-bold text-4xl'>
              1550.0
            </div>
            <div className='mt-3 font-bold mr-8 w-8'>
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
              151.2
            </div>
            <div className='mt-3 font-bold mr-8 w-8'>
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
              17777
            </div>
            <div className='mt-3 font-bold mr-8 w-8'>
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
              151.2
            </div>
            <div className='mt-3 font-bold mr-8 w-8'>
              <span>tCO2</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default DataField
