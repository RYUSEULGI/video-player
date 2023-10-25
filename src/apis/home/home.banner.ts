import { IBannerEntity } from '../../types/common/banner/banner.types'

export const APIGetBanner = (): IBannerEntity[] => {
  return [
    { id: 1, name: '배너1', link: '' },
    { id: 2, name: '배너2', link: '' },
    { id: 3, name: '배너3', link: '' },
  ]
}
