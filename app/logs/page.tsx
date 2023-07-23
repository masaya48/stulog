import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { ButtonWrapper } from '../_components/ButtonWrapper'
import { SignOutButton } from '../_components/SignOutButton'

export default async function LogsPage() {
  const serverComponentClient = createServerComponentClient<Database>({cookies})
  const { data: user } = await serverComponentClient.auth.getUser()
  const { data: logs } = await serverComponentClient.from('logs').select('*').eq('user_id', user?.user?.id)

  return (
    <>
      {logs && logs.length ? (
        <ul >
          {logs.map(({id, title, content}) => (
            <li key={id}>
              <p>{title}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>) : <p>nothing yet</p>}
        <ButtonWrapper>
          <SignOutButton />
        </ButtonWrapper>
        <ButtonWrapper>
          <Link href="/logs/new">+ add new log</Link>
        </ButtonWrapper>
    </>
  )
}
