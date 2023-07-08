import { Button } from '../_components/Button'
import { TextInput } from '../_components/TextInput'
import { signin } from './action'

export default function LoginPage() {
  return (
    <form action={signin} className="flex justify-center flex-col gap-4">
      <TextInput label="email" type="email" name="email" />
      <Button type="submit">signin</Button>
    </form>
  )
}
