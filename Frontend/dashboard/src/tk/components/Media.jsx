import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendLogToServer } from '../../logSlice';

const Media = () => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);


  const handleError = () => {
    const logData = {
      timestamp: new Date().toISOString(),
      type: 'error',
      message: 'Video playback error',
      videoSrc: videoRef.current?.src,
    };
    dispatch(sendLogToServer(logData));
  };


  const handlePause = () => {
    const logData = {
      timestamp: new Date().toISOString(),
      type: 'pause',
      message: 'Video playback paused',
      videoSrc: videoRef.current?.src,
    };
    dispatch(sendLogToServer(logData));
  };


  const handleEnded = () => {
    const logData = {
      timestamp: new Date().toISOString(),
      type: 'ended',
      message: 'Video playback ended',
      videoSrc: videoRef.current?.src,
    };
    dispatch(sendLogToServer(logData));
  };


  const checkPlay = () => {
    const video = document.querySelector('video');
    if (video.error === MediaError.MEDIA_ERR_ABORTED || video.error === MediaError.MEDIA_ERR_NETWORK) {
      video.load();
    }

    if (video.paused || video.ended) {
      video.play();
      // video.play().catch(console.error);
    }
  };

  useEffect(() => {
    const handle = setInterval(checkPlay, 30000);
    return () => clearInterval(handle);
  }, []);

  return (
    <div className='w-full h-full'>
      <video
        ref={videoRef}
        src={`/video/TK_OUT.mp4`}
        autoPlay
        loop
        preload="auto"
        className='object-fill w-full h-full border-y'
        onError={handleError}
        onPause={handlePause}
        onEnded={handleEnded}
      />
    </div>
  )
}

export default Media;