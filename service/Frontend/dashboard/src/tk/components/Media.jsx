const Media = () => {
  return (
    <div className='w-full h-full'>
      <video
        src={`/video/TK_OUT.mp4`}
        autoPlay
        loop
        muted
        className='object-fill w-full h-full border-y'
      />
    </div>
  )
}

export default Media
