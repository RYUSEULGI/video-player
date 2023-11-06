import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { VideoPlayerContext } from '../../../context/VideoPlayerContext'
import VideoControlBar from './VideoControlBar'
import VideoPlayerTemplate from './VideoPlayerTemplate'
import VideoPlayerView from './VideoPlayerView'

interface Props {
  videoSrc: string
}

const VideoPlayer: FC<Props> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  const videoElement = videoRef.current
  const videoContainerElement = videoContainerRef.current

  const [isPlaying, setIsPlaying] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const [videoTime, setVideoTime] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const currentTime = useMemo(() => videoTime, [videoTime])

  const handlePlayVideo = useCallback(() => {
    if (!videoElement) {
      return
    }

    setIsPlaying(true)
    videoElement.play()
  }, [videoElement])

  useEffect(() => {
    handlePlayVideo()
  }, [handlePlayVideo])

  const handleMouseMoveVideo = useCallback(() => {
    if (showControls) {
      return
    }

    setShowControls(true)
    setTimeout(() => {
      setShowControls(false)
    }, 3000)
  }, [showControls])

  const onPlay = () => {
    if (!videoElement) {
      return
    }
    setIsPlaying((prev) => !prev)
    isPlaying ? videoElement.pause() : videoElement.play()
  }

  const onChangeProgress = (percent: number) => {
    if (!videoElement) {
      return
    }

    if (!showControls) {
      setShowControls(true)
    }

    const time = videoElement.duration * (percent / 100)
    setVideoTime(time)
  }

  const setFullScreenChange = () => {
    setIsFullScreen((prev) => !prev)
  }

  const videoContext = {
    videoElement,
    videoContainerElement,
    isFullScreen,
    isPlaying,
    currentTime,
    onPlay,
    setIsPlaying,
    setCurrentTime: setVideoTime,
    setFullScreenChange,
    onChangeProgress,
  }

  return (
    <VideoPlayerContext.Provider value={videoContext}>
      <div
        className="relative w-1000px h-600px"
        ref={videoContainerRef}
        onMouseMove={handleMouseMoveVideo}
      >
        <VideoPlayerTemplate
          View={<VideoPlayerView ref={videoRef} videoSrc={videoSrc} />}
          Controls={showControls ? <VideoControlBar /> : undefined}
        />
      </div>
    </VideoPlayerContext.Provider>
  )
}
export default VideoPlayer
