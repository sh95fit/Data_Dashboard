import React from 'react'

const Media = () => {
  return (
    <div className='w-full h-full'>
      <video
        src={`/IKEA_ad_only.mp4`}
        autoPlay
        loop
        muted
        className='w-full h-full object-fill'
      / >
    </div>
  )
}

export default Media
