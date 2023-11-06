import { ChangeEvent, useCallback, useContext, useState } from 'react'
import { VideoPlayerContext } from '../../../../context/VideoPlayerContext'
import { toTimeString } from '../../../../utils/time'

const VideoProgressBar = () => {
  const {
    isPlaying,
    currentTime,
    videoElement,
    setIsPlaying,
    onChangeProgress,
  } = useContext(VideoPlayerContext)

  const maxTime = videoElement?.duration ?? 0
  const percent = (currentTime / maxTime) * 100

  const [isProgressChange, setIsProgressChange] = useState(false)

  const handleMouseDown = () => {
    setIsProgressChange(true)
  }

  const handleMouseUp = () => {
    if (!videoElement) {
      return
    }

    videoElement.currentTime = currentTime
    videoElement.play()

    setIsPlaying(true)
    setIsProgressChange(false)
  }

  const handleMouseMove = () => {
    if (!videoElement || !isProgressChange || !isPlaying) {
      return
    }

    videoElement.pause()
    setIsPlaying(false)
  }

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value)
      onChangeProgress(value)
    },
    [onChangeProgress],
  )

  return (
    <div className="flex items-center content-center gap-3 w-full">
      <span className="text-center w-14 text-white">
        {toTimeString(Math.floor(currentTime))}
      </span>
      <input
        className="w-full"
        type="range"
        max="100"
        min="0"
        step="1"
        value={percent}
        onChange={handleChange}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
      <span className="text-center w-14 text-white">
        {toTimeString(maxTime)}
      </span>
    </div>
  )
}

export default VideoProgressBar
