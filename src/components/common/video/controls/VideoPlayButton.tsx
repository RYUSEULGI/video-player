import { useContext } from 'react'
import { VideoPlayerContext } from '../../../../context/VideoPlayerContext'
import PauseIcon from '../../../../icons/PauseIcon'
import PlayIcon from '../../../../icons/PlayIcon'

const VideoPlayButton = () => {
  const { isPlaying, onPlay } = useContext(VideoPlayerContext)

  return (
    <button className="text-white" onClick={onPlay}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  )
}

export default VideoPlayButton
