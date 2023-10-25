import { FC } from 'react'
import { IVideoEntity } from '../../../../types/common/video/video.types'

interface Props {
  item: IVideoEntity
}

const HomeRecommendVideoListItem: FC<Props> = ({ item }) => {
  return (
    <div className="flex items-center gap-6 pt-6 pb-6 pr-">
      <div className="rounded-2xl bg-slate-100 w-20 h-20" />
      <div className="flex flex-col ">
        <span className="text-base font-semibold truncate mb-1">
          {item.title}
        </span>
        <p className="text-base text-neutral-500 truncate">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default HomeRecommendVideoListItem
