import { FC, ReactElement } from 'react'

interface Props {
  Video: ReactElement
  Banner: ReactElement
  List: ReactElement
}

const HomePageTemplate: FC<Props> = ({ Video, Banner, List }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4">{Video}</div>
      <div className="p-8">
        <div className="mb-12">{Banner}</div>
        <h2 className="text-lg font-semibold mb-2">추천 리스트</h2>
        {List}
      </div>
    </div>
  )
}

export default HomePageTemplate
