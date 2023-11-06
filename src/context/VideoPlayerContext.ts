import { createContext, useContext } from 'react'

interface VideoContextProps {
  videoElement: HTMLVideoElement | null
  videoContainerElement: HTMLDivElement | null
  isFullScreen: boolean
  isPlaying: boolean
  currentTime: number
  onPlay: () => void
  setCurrentTime: (time: number) => void
  setIsPlaying: (isPlaying: boolean) => void
  setFullScreenChange: (isFullScreen: boolean) => void
  onChangeProgress: (percent: number) => void
}

export const VideoPlayerContext = createContext<VideoContextProps>({
  videoElement: null,
  videoContainerElement: null,
  isFullScreen: false,
  isPlaying: true,
  currentTime: 0,
  onPlay: () => {},
  setCurrentTime: () => {},
  setIsPlaying: () => {},
  setFullScreenChange: () => {},
  onChangeProgress: () => {},
})

export const useVideoPlayer = () => {
  const context = useContext(VideoPlayerContext)

  if (!context) {
    throw new Error('video player context must be provided')
  }

  return context
}
