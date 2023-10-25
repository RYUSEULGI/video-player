import VideoPlayer from '../components/common/video/VideoPlayer'
import HomeBannerList from '../components/pages/home/HomeBannerList'
import HomePageTemplate from '../components/pages/home/HomePageTemplate'
import HomeRecommendVideoList from '../components/pages/home/recommend/HomeRecommendVideoList'

const HomePage = () => {
  return (
    <HomePageTemplate
      Video={<VideoPlayer />}
      Banner={<HomeBannerList />}
      List={<HomeRecommendVideoList />}
    />
  )
}

export default HomePage
