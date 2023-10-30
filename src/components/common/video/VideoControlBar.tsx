import { FC, useContext, useState } from 'react'
import { VideoContext } from '../../../context/videoContent'
import ExitFullScreenIcon from '../../../icons/ExitFullScreenIcon'
import FullScreenIcon from '../../../icons/FullScreenIcon'
import PauseIcon from '../../../icons/PauseIcon'
import PlayIcon from '../../../icons/PlayIcon'
import VideoProgressBar from './VideoProgressBar'
import VideoVolumeControl from './VideoVolumeControl'

interface Props {
  videoContainerElement: HTMLDivElement | null
  maxTime: number
  isPlaying: boolean
  videoCurrentTime: number
  onPlay: () => void
  onChangeProgress: (percent: number) => void
  onChangePlaying: (playing: boolean) => void
}

const VideoControlBar: FC<Props> = ({
  videoContainerElement,
  isPlaying,
  maxTime,
  videoCurrentTime,
  onPlay,
  onChangeProgress,
  onChangePlaying,
}) => {
  const { videoElement } = useContext(VideoContext)

  const [isProgressChange, setIsProgressChange] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleSize = () => {
    if (!videoContainerElement || !videoElement) {
      return
    }

    if (isFullScreen) {
      videoElement.width = 1000
      videoElement.height = 600
      setIsFullScreen(false)
      document.exitFullscreen()
    } else {
      setIsFullScreen(true)
      videoElement.width = 2000
      videoElement.height = 900
      videoContainerElement.requestFullscreen()
    }
  }

  const handleMouseDown = () => {
    setIsProgressChange(true)
  }

  const handleMouseMove = () => {
    if (!videoElement || !isProgressChange || !isPlaying) {
      return
    }

    videoElement.pause()
    onChangePlaying(false)
  }

  const handleMouseUp = () => {
    if (!videoElement) {
      return
    }

    videoElement.currentTime = videoCurrentTime
    videoElement.play()
    onChangePlaying(true)
    setIsProgressChange(false)
  }

  return (
    <div className="p-3 bg-black/50">
      <div className="mt-3">
        <VideoProgressBar
          maxTime={maxTime}
          currentTime={videoCurrentTime}
          onChange={onChangeProgress}
          onMousedown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        />
      </div>
      <div className="flex items-center content-between w-full">
        <div className="flex items-center gap-3">
          <button className="text-white" onClick={onPlay}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button className="text-white">
            <VideoVolumeControl />
          </button>
        </div>
        <div>
          <button className="text-white" onClick={handleSize}>
            {isFullScreen ? <ExitFullScreenIcon /> : <FullScreenIcon />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoControlBar
