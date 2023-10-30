import { ChangeEvent, FC, useCallback } from 'react'
import { toTimeString } from '../../../utils/time'

interface Props {
  maxTime: number
  currentTime: number
  onChange: (percent: number) => void
  onMousedown: () => void
  onMouseUp: () => void
  onMouseMove: () => void
}

const VideoProgressBar: FC<Props> = ({
  maxTime,
  currentTime,
  onChange,
  onMousedown,
  onMouseUp,
  onMouseMove,
}) => {
  const percent = (currentTime / maxTime) * 100

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value)
      onChange(value)
    },
    [onChange],
  )

  return (
    <div className="flex items-center content-center gap-3 w-full">
      <span className="text-center w-14 text-white">
        {toTimeString(Math.floor(currentTime))}
      </span>
      <input
        className="w-full"
        type="range"
        max="100"
        min="0"
        step="1"
        value={percent}
        onChange={handleChange}
        onMouseDown={onMousedown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      />
      <span className="text-center w-14 text-white">
        {toTimeString(maxTime)}
      </span>
    </div>
  )
}
export default VideoProgressBar
