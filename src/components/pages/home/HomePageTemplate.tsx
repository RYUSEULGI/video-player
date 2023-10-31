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
      <div className="mb-12 pt-8 pb-8">{Banner}</div>
      <div className="pr-8 pl-8">
        <h2 className="text-lg font-semibold mb-2">추천 리스트</h2>
        {List}
      </div>
    </div>
  )
}

export default HomePageTemplate
