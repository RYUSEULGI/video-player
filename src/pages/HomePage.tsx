import VideoPlayer from '../components/common/video/VideoPlayer'
import HomeBannerList from '../components/pages/home/HomeBannerList'
import HomePageTemplate from '../components/pages/home/HomePageTemplate'

const HomePage = () => {
  return (
    <HomePageTemplate
      Video={
        <VideoPlayer videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      }
      Banner={<HomeBannerList />}
    />
  )
}

export default HomePage
