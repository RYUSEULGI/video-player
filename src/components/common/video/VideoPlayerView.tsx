import { forwardRef, useCallback, useContext } from 'react'
import { VideoPlayerContext } from '../../../context/VideoPlayerContext'

interface Props {
  videoSrc: string
}

const VideoPlayerView = forwardRef<HTMLVideoElement, Props>((props, ref) => {
  const { videoElement, setCurrentTime } = useContext(VideoPlayerContext)

  const onUpdateVideoTime = useCallback(() => {
    if (!videoElement) {
      return
    }
    setCurrentTime(videoElement.currentTime)
  }, [videoElement])

  return (
    <video
      className="object-fill w-full h-full"
      ref={ref}
      loop
      playsInline
      autoPlay
      onTimeUpdate={onUpdateVideoTime}
    >
      <source src={props.videoSrc} type="video/mp4" />
    </video>
  )
})

export default VideoPlayerView
