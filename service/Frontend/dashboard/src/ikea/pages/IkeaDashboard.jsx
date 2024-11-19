import React from 'react'

import Sidebar from '../components/Sidebar'
import Media from '../components/Media'
// import Comment from '../components/Comment'

const IkeaDashboard = () => {
  return (
    <div className="grid h-screen bg-gray-100 grid-cols-20 grid-rows-12">
      <div className="col-span-4 row-span-12">
        <Sidebar />
      </div>
      <div className="col-span-16 row-span-12">
        <Media />
      </div>
    </div>
  )
}

export default IkeaDashboard



