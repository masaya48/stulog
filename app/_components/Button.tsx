

import { FC } from "react"

type Props = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

export const Button: FC<Props> = ({children, onClick, type = 'button'}) => (
  <button type={type} onClick={onClick} className="p-1 text-center border-cyan-500 bg-cyan-500 text-white hover:opacity-60 border-2 rounded-md">{children}</button>
)