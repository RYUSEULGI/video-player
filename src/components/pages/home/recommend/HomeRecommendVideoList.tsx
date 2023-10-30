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
      {items.map((item, index: number) => (
        <div
          className="border-b border-l-stone-300"
          key={`recommend-video-item-${index}`}
        >
          <HomeRecommendVideoListItem item={item} />
        </div>
      ))}
    </div>
  )
}

export default HomeRecommendVideoList
