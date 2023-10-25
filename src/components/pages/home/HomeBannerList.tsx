import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { APIGetBanner } from '../../../apis/home/home.banner'
import Banner from '../../common/banner/Banner'

interface Props {}

const HomeBannerList: FC<Props> = ({}) => {
  const { isLoading, data } = useQuery({
    queryKey: ['get-banner'],
    queryFn: APIGetBanner,
  })

  const banners = data ?? []

  if (isLoading) {
    return <>Loading</>
  }

  //TODO: Add Custom Swipe
  return (
    <div className="w-full overflow-x-hidden">
      <Banner banner={banners[0]} />
    </div>
  )
}

export default HomeBannerList
