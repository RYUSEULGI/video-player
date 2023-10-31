import { FC, useEffect, useRef, useState } from 'react'
import { APIGetBanner } from '../../../apis/home/home.banner'
import { IBannerEntity } from '../../../types/common/banner/banner.types'
import Banner from '../../common/banner/Banner'

interface Props {}

const items = APIGetBanner()

const HomeBannerList: FC<Props> = ({}) => {
  const bannerRef = useRef<HTMLDivElement>(null)
  const bannerElement = bannerRef.current

  const [index, setIndex] = useState(1)
  const [banners, setBanners] = useState<IBannerEntity[]>([])

  useEffect(() => {
    if (!bannerElement) {
      return
    }

    bannerElement.style.transform = `translateX(-${index}00%)`
  }, [bannerElement, index])

  useEffect(() => {
    if (items.length < 1) {
      return
    }

    const sliceItems = items.slice()
    const start = sliceItems[0]
    const end = sliceItems[sliceItems.length - 1]

    setBanners([end, ...sliceItems, start])
  }, [items])

  const handleSlide = (index: number) => {
    setTimeout(() => {
      setIndex(index)

      if (!bannerElement) {
        return
      }

      bannerElement.style.transition = ''
    }, 500)
  }

  // TODO: 자동 스와이프시 transition 올바르게 실해하도록 하기
  // useEffect(() => {
  //   const interverId = setInterval(() => handleSwipe(1), 3000)
  //   return clearInterval(interverId)
  // }, [])

  const handleSwipe = (direction: number) => {
    const newIndex = index + direction

    if (newIndex === items.length + 1) {
      handleSlide(1)
    } else if (newIndex === 0) {
      handleSlide(items.length)
    }

    setIndex((prev) => prev + direction)

    if (!bannerElement) {
      return
    }

    bannerElement.style.transition = 'all 0.5s ease-in-out'
  }

  return (
    <div className="flex items-center content-center w-full">
      <div className="w-full overflow-hidden">
        <div className="flex w-full" ref={bannerRef}>
          {banners.map((banner, index: number) => (
            <Banner key={`banner-${index}`} banner={banner} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeBannerList
