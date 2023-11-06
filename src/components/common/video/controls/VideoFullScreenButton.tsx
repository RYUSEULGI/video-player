import { useContext } from 'react'
import { VideoPlayerContext } from '../../../../context/VideoPlayerContext'
import ExitFullScreenIcon from '../../../../icons/ExitFullScreenIcon'
import FullScreenIcon from '../../../../icons/FullScreenIcon'

const VideoFullScreenButton = () => {
  const {
    videoElement,
    videoContainerElement,
    isFullScreen,
    setFullScreenChange,
  } = useContext(VideoPlayerContext)

  const handleSize = () => {
    if (!videoContainerElement || !videoElement) {
      return
    }

    if (isFullScreen) {
      setFullScreenChange(false)
      document.exitFullscreen()
    } else {
      setFullScreenChange(true)
      videoContainerElement.requestFullscreen()
    }
  }

  return (
    <button className="text-white" onClick={handleSize}>
      {isFullScreen ? <ExitFullScreenIcon /> : <FullScreenIcon />}
    </button>
  )
}

export default VideoFullScreenButton
