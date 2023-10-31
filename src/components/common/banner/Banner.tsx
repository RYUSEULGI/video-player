import { FC } from 'react'
import { IBannerEntity } from '../../../types/common/banner/banner.types'

interface Props {
  banner: IBannerEntity
}

const Banner: FC<Props> = ({ banner }) => {
  const handleClick = () => {}

  return (
    <div
      className="object-contain flex-none w-full text-center rounded-2xl bg-slate-100 p-16"
      onClick={handleClick}
    >
      {banner.name}
    </div>
  )
}

export default Banner
