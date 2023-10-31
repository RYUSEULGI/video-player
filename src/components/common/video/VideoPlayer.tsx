import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { VideoContext } from '../../../context/videoContent'
import VideoControlBar from './VideoControlBar'
import VideoPlayerTemplate from './VideoPlayerTemplate'

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

  const currentTime = useMemo(() => videoTime, [videoTime])
  const maxTime = videoElement?.duration ?? 0

  const updateVideoTime = useCallback(() => {
    if (!videoElement) {
      return
    }

    setVideoTime(videoElement.currentTime)
  }, [videoElement])

  const handlePlayVideo = useCallback(() => {
    if (!videoElement) {
      return
    }

    videoElement.addEventListener('timeupdate', updateVideoTime)

    setIsPlaying(true)
    videoElement.muted = false

    return () => {
      videoElement.removeEventListener('timeupdate', updateVideoTime)
    }
  }, [updateVideoTime, videoElement])

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

  const handleClickPlay = () => {
    if (!videoElement) {
      return
    }

    setIsPlaying((prev) => !prev)
    isPlaying ? videoElement.pause() : videoElement.play()
  }

  const handleChangeProgress = (percent: number) => {
    if (!videoElement) {
      return
    }

    if (!showControls) {
      setShowControls(true)
    }

    const time = maxTime * (percent / 100)
    setVideoTime(time)
  }

  return (
    <VideoContext.Provider value={{ videoElement }}>
      <div ref={videoContainerRef} onMouseMove={handleMouseMoveVideo}>
        <VideoPlayerTemplate
          View={
            <video
              className="object-fill"
              width={1000}
              height={600}
              ref={videoRef}
              loop
              muted
              playsInline
              autoPlay
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          }
          Controls={
            showControls ? (
              <VideoControlBar
                videoContainerElement={videoContainerElement}
                maxTime={maxTime}
                isPlaying={isPlaying}
                videoCurrentTime={currentTime}
                onPlay={handleClickPlay}
                onChangePlaying={setIsPlaying}
                onChangeProgress={handleChangeProgress}
              />
            ) : undefined
          }
        />
      </div>
    </VideoContext.Provider>
  )
}
export default VideoPlayer
