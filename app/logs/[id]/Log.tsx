import { Button } from '@/app/_components/Button'
import { TextInput } from '@/app/_components/TextInput'
import { Database } from '@/libs/database.types'
import { createLog } from './action'

export const Log = ({log}: {log: Database['public']['Tables']['logs']['Row'] | null}) => {
  return (
    <form className="bg-white flex flex-col gap-4 p-4 rounded-md" action={createLog}>
      <TextInput label="title" name="title" value={log?.title ?? ''} />
      <TextInput label="content" name="content" value={log?.content ?? ''} />
      <input type="hidden" name="id" value={log?.id} />
      <Button type="submit">submit</Button>
    </form>
  )
}
