import VideoVolumeControl from './VideoVolumeControl'
import VideoFullScreenButton from './controls/VideoFullScreenButton'
import VideoPlayButton from './controls/VideoPlayButton'
import VideoProgressBar from './controls/VideoProgressBar'
import VideoSettingList from './controls/VideoSettingList'

const VideoControlBar = () => {
  return (
    <div className="p-3 bg-black/50">
      <div className="mt-3">
        <VideoProgressBar />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <VideoPlayButton />
          <VideoVolumeControl />
        </div>
        <div className="flex items-center gap-3">
          <VideoSettingList />
          <VideoFullScreenButton />
        </div>
      </div>
    </div>
  )
}

export default VideoControlBar
