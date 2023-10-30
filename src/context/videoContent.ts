import { createContext } from 'react'

interface VideoContextProps {
  videoElement: HTMLVideoElement | null
}

export const VideoContext = createContext<VideoContextProps>({
  videoElement: null,
})
