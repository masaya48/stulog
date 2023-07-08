

import { FC } from "react"

type Props = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

export const Button: FC<Props> = ({children, onClick, type = 'button'}) => (
  <button type={type} onClick={onClick} className="p-1 text-center">{children}</button>
)