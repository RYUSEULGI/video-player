import { FC, PropsWithChildren } from 'react'

const DefaultLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2 min-h-screen">
        <div className="w-full shadow-xl">{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout
