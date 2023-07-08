import { FC } from "react"

type Props = {
  children: React.ReactNode
}

export const ButtonWrapper: FC<Props> = ({children}) => (
  <div className="w-full flex justify-center">
    {children}
  </div>
)
