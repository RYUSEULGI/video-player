import { FC, ReactElement } from 'react'

interface Props {
  Video: ReactElement
  Banner: ReactElement
}

const HomePageTemplate: FC<Props> = ({ Video, Banner }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4">{Video}</div>
      <div className="mb-12 pt-8 pb-8">{Banner}</div>
    </div>
  )
}

export default HomePageTemplate
