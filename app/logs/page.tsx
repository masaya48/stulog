import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { SignOutButton } from "../_components/SignOutButton"

export default async function LogsPage() {
  const supabase = createServerComponentClient({cookies})
  const {data: user} = await supabase.auth.getUser()

  const { data: logs } = await supabase
    .from('logs')
    .select('*')
    .eq('user_id', user?.user?.id)

  return (
    <ul>
      {logs?.length ? JSON.stringify(logs) : 'nothing yet'}
      <SignOutButton />
    </ul>
  )
}
