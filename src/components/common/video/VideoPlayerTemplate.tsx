import { FC, ReactElement } from 'react'

interface Props {
  View: ReactElement
  Controls?: ReactElement
}

const VideoPlayerTemplate: FC<Props> = ({ View, Controls }) => {
  return (
    <div className="relative">
      {View}
      {Controls && (
        <div className="absolute bottom-0 left-0 right-0">{Controls}</div>
      )}
    </div>
  )
}

export default VideoPlayerTemplate
