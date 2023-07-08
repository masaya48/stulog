import { signin } from './action'

export default function LoginPage() {
  return (
    <form action={signin}>
      <input type="email" name="email" />
      <button type="submit">signin</button>
    </form>
  )
}
