import { FC } from 'react'

interface Props {
  active: boolean
  item: { name: string; value: number }
  onClick: (rate: number) => void
}

const VideoRateButton: FC<Props> = ({ active, item, onClick }) => {
  const handleClick = () => {
    onClick(item.value)
  }

  return (
    <span
      className={`text-white flex items-center content-center p-3 ${
        active ? 'bg-slate-700' : 'bg-black'
      }`}
      onClick={handleClick}
    >
      {item.name}
    </span>
  )
}

export default VideoRateButton
