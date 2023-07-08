import { forwardRef } from "react"

type Props = {
  type?: 'text' | 'email' | 'password'
  label: string
  name: string
}

export const TextInput = forwardRef<HTMLInputElement, Props>(({type, label, name}, ref) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-gray-800 text-sm">{label}</label>
    <input ref={ref} type={type} name={name} className="border-2 border-gray-800 rounded-sm p-2" />
  </div>
))
