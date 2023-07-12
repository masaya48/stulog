import { Button } from "@/app/_components/Button"
import { TextInput } from "@/app/_components/TextInput"
import { createLog } from "./action"

export const NewLog = () => {
  return (
    <form className="bg-white flex flex-col gap-4 p-4 rounded-md" action={createLog}>
      <TextInput label="title" name="title" />
      <TextInput label="content" name="content" />
      <Button type="submit">submit</Button>
    </form>
  )
}
