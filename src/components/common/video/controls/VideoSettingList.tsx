import { useContext, useState } from 'react'

import { VideoPlayerContext } from '../../../../context/VideoPlayerContext'
import SettingIcon from '../../../../icons/SettingIcon'
import VideoRateButton from './VideoRateButton'

const rateItems = [
  {
    name: 'x 0.5',
    value: 0.5,
  },
  {
    name: 'x 1.0',
    value: 1.0,
  },
  {
    name: 'x 1.5',
    value: 1.5,
  },
]

const VideoSettingList = () => {
  const { videoElement } = useContext(VideoPlayerContext)
  const [showVideoSetting, setShowVideoSetting] = useState(false)

  const handleToggle = () => {
    setShowVideoSetting((prev) => !prev)
  }

  const handleChangePlaybackRate = (rate: number) => {
    if (!videoElement) {
      return
    }

    videoElement.playbackRate = rate
    setShowVideoSetting(false)
  }

  return (
    <>
      <button className="text-white relative" onClick={handleToggle}>
        <SettingIcon />
      </button>

      {showVideoSetting && (
        <div className="absolute right-0 bottom-10 bg-black w-100px">
          {rateItems.map((item, index: number) => (
            <VideoRateButton
              key={`video-setting-rate-${index}`}
              item={item}
              active={videoElement?.playbackRate === item.value}
              onClick={handleChangePlaybackRate}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default VideoSettingList
