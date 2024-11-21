import React from 'react'

const Media = () => {
  return (
    <div className='w-full h-full'>
      <video
        src={`/video/IKEA_ad_only.mp4`}
        autoPlay
        loop
        muted
        className='object-fill w-full h-full'
      / >
    </div>
  )
}

export default Media
