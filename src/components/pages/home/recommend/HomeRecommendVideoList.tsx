import { useQuery } from '@tanstack/react-query'
import { APIGetHomeRecommendList } from '../../../../apis/home/home.recommend'
import HomeRecommendVideoListItem from './HomeRecommendVideoListItem'

const HomeRecommendVideoList = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['get-recommend-list'],
    queryFn: APIGetHomeRecommendList,
  })

  const items = data ?? []

  if (isLoading) {
    return <>Loading</>
  }
  return (
    <div>
      {items.map((item) => (
        <div className="border-b border-l-stone-300">
          <HomeRecommendVideoListItem
            key={`recommend-video-item-${item.id}`}
            item={item}
          />
        </div>
      ))}
    </div>
  )
}

export default HomeRecommendVideoList
