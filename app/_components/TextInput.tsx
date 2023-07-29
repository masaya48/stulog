import { forwardRef } from "react"

type Props = {
  type?: 'text' | 'email' | 'password'
  label: string
  name: string
  value?: string | number
}

export const TextInput = forwardRef<HTMLInputElement, Props>(({type, label, name, value}, ref) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-gray-800 text-sm">{label}</label>
    <input ref={ref} type={type} name={name} defaultValue={value} className="border-2 border-gray-800 rounded-sm p-2" />
  </div>
))
