import { FC } from 'react'
import { IBannerEntity } from '../../../types/common/banner/banner.types'

interface Props {
  banner: IBannerEntity
}

const Banner: FC<Props> = ({ banner }) => {
  const handleClick = () => {}

  return (
    <div
      className="flex items-center justify-center rounded-2xl bg-slate-100 p-16"
      onClick={handleClick}
    >
      {banner.name}
    </div>
  )
}

export default Banner
