import React from 'react'

import GRANDSUN_LOGO from '../assets/img/grandsun_logo.png'
import IKEA_LOGO from '../assets/img/Ikea-logo.png'
import DataField from './DataField'
import DayInfo from './DayInfo'

const Sidebar = () => {
  return (
    <div className="h-full w-full grid grid-rows-17">
      <div className='bg-ikea-yellow row-span-3 flex items-center justify-center p-4 -mb-20 -mt-20'>
        <img src={IKEA_LOGO} alt="ikea logo" className='max-w-[80%] max-h-full object-contain' />
      </div>
      <div className="bg-white row-span-6">
        <DayInfo />
      </div>
      <div className="bg-ikea-yellow row-span-5 flex flex-col">
        <DataField />
      </div>
      <div className="bg-ikea-yellow row-span-2 p-2 flex items-center justify-center">
        <img src={GRANDSUN_LOGO} alt="grandsun logo" className='w-[80%] h-auto ' />
      </div>
    </div>
  )
}

export default Sidebar

