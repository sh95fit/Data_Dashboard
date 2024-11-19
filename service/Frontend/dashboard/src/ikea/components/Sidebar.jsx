import React from 'react'
import GRANDSUN_LOGO from '../assets/img/grandsun_logo.png'
import IKEA_LOGO from '../assets/img/Ikea-logo.png'
import DataField from './DataField'
import DayInfo from './DayInfo'

const Sidebar = () => {
  return (
    <div className="grid w-full h-full grid-rows-17">
      <div className='flex items-center justify-center row-span-3 p-10 -mt-20 -mb-20 bg-ikea-yellow'>
        <img src={IKEA_LOGO} alt="ikea logo" className='max-w-[80%] max-h-full object-contain' />
      </div>
      <div className="row-span-6 bg-white">
        <DayInfo />
      </div>
      <div className="flex flex-col row-span-5 bg-ikea-yellow">
        <DataField />
      </div>
      <div className="flex items-center justify-center row-span-2 p-2 bg-ikea-yellow">
        <img src={GRANDSUN_LOGO} alt="grandsun logo" className='w-[80%] h-auto ' />
      </div>
    </div>
  )
}

export default Sidebar

