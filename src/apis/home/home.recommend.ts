import { IVideoEntity } from '../../types/common/video/video.types'

export const APIGetHomeRecommendList = (): IVideoEntity[] => {
  return [
    {
      id: 1,
      title: '어쩌구 저쩌구',
      description: 'fsfdfsfdsf',
    },
    {
      id: 2,
      title: '어쩌구 저쩌구',
      description: 'fsfdfsfdsf',
    },
    {
      id: 3,
      title: '어쩌구 저쩌구',
      description: 'fsfdfsfdsf',
    },
  ]
}
