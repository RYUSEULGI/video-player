import { ChangeEvent, useCallback, useContext, useState } from 'react'
import { VideoContext } from '../../../context/videoContent'
import VolumneIcon from '../../../icons/VolumneIcon'

const VideoVolumeControl = () => {
  const { videoElement } = useContext(VideoContext)

  const [showVolume, setShowVolume] = useState(false)

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

  const handleChangeVolume = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!videoElement) {
        return
      }

      videoElement.volume = Number(e.target.value)
    },
    [videoElement],
  )

  return (
    <div
      className="flex items-center gap-3"
      onClick={handleToggleVolume}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <VolumneIcon mute={videoElement?.muted ?? false} />
      {showVolume && (
        <div>
          <input
            className="w-100px"
            type="range"
            max="100"
            min="0"
            step="1"
            value={videoElement?.volume ?? 0}
            onChange={handleChangeVolume}
          />
        </div>
      )}
    </div>
  )
}

export default VideoVolumeControl
