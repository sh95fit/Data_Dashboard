import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendLogToServer } from '../../logSlice';

const Media = () => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);


  const handleError = () => {
    const error = videoRef.current?.error;

    let errorMessage = 'Unknown error occurred';
    if (error) {
      switch (error.code) {
        case MediaError.MEDIA_ERR_ABORTED:
          errorMessage = 'The video playback was aborted.';
          break;
        case MediaError.MEDIA_ERR_NETWORK:
          errorMessage = 'A network error caused the video download to fail.';
          break;
        case MediaError.MEDIA_ERR_DECODE:
          errorMessage = 'The video playback was aborted due to a decoding error.';
          break;
        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
          errorMessage = 'The video format is not supported.';
          break;
        default:
          errorMessage = `An unknown error occurred. Error code: ${error.code}`;
      }
    }

    const logData = {
      timestamp: new Date().toISOString(),
      type: 'error',
      message: `Video playback error : ${errorMessage}`,
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
    const video = videoRef.current;

    // if (video.error === MediaError.MEDIA_ERR_ABORTED || video.error === MediaError.MEDIA_ERR_NETWORK) {
    if (video.error) {
      const errorCode = video.error.code;
      if (errorCode === 1 || errorCode === 2) {
        video.load();
        const logData = {
          timestamp: new Date().toISOString(),
          type: 'error',
          message: `Video error occurred - Error Code: ${errorCode}`,
          videoSrc: video.src,
        };
        dispatch(sendLogToServer(logData));
      }
    }

    // if (video.paused || video.ended) {
    //   video.play();
    //   // video.play().catch(console.error);
    // }
  };

  useEffect(() => {
    const handle = setInterval(checkPlay, 30000);
    return () => clearInterval(handle);
  }, []);

  return (
    <div className='w-full h-full'>
      <video
        ref={videoRef}
        src={`/video/TK_FULL_OUT.mp4`}
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