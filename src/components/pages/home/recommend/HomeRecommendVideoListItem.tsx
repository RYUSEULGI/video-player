import { FC } from 'react'
import { IVideoEntity } from '../../../../types/common/video/video.types'

interface Props {
  item: IVideoEntity
}

const HomeRecommendVideoListItem: FC<Props> = ({ item }) => {
  return (
    <div className="flex items-center gap-6 pt-6 pb-6 pr-">
      <div className="rounded-2xl bg-slate-100 w-56px h-56px">
        <img
          src={item.thumb}
          alt="thumnail"
          className="rounded-2xl block mx-auto h-24 sm:mx-0 sm:shrink-0"
        />
      </div>
      <div className="text-center space-y-2 sm:text-left w-ful">
        <p className="text-lg text-black font-semibold">{item.title}</p>
        <p className="text-slate-500 font-medium truncate">{item.subtitle}</p>
      </div>
    </div>
  )
}

export default HomeRecommendVideoListItem
