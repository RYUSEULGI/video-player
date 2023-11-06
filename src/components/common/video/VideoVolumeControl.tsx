import { ChangeEvent, useCallback, useContext, useState } from 'react'
import { VideoPlayerContext } from '../../../context/VideoPlayerContext'
import VolumneIcon from '../../../icons/VolumneIcon'

const VideoVolumeControl = () => {
  const { videoElement } = useContext(VideoPlayerContext)

  const [showVolume, setShowVolume] = useState(false)
  const [isVolumeChange, setIsVolumeChange] = useState(false)

  const handleToggleVolume = () => {
    if (!videoElement) {
      return
    }
    videoElement.muted
      ? (videoElement.muted = false)
      : (videoElement.muted = true)
  }

  const handleMouseEnter = () => {
    setShowVolume(true)
  }

  const handleMouseLeave = () => {
    setShowVolume(false)
  }

  const handleMouseDown = () => {
    setIsVolumeChange(true)
  }

  const handleMouseUp = () => {
    setIsVolumeChange(false)
  }

  const handleMouseMove = () => {
    if (!videoElement || !isVolumeChange) {
      return
    }

    setShowVolume(true)
  }

  const handleChangeVolume = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!videoElement) {
        return
      }

      videoElement.volume = Number(e.target.value) / 100
    },
    [videoElement],
  )

  if (!videoElement) {
    return <></>
  }

  return (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-white" onClick={handleToggleVolume}>
        <VolumneIcon mute={videoElement.muted} />
      </button>

      {showVolume && (
        <input
          className="w-100px"
          type="range"
          max="100"
          min="0"
          step="1"
          value={videoElement.volume * 100 ?? 100}
          onChange={handleChangeVolume}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        />
      )}
    </div>
  )
}

export default VideoVolumeControl
