import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { ButtonWrapper } from '../_components/ButtonWrapper'
import { SignOutButton } from '../_components/SignOutButton'
import { RemoveLog } from './RemoveLog'

export default async function LogsPage() {
  const serverComponentClient = createServerComponentClient<Database>({ cookies })
  const { data } = await serverComponentClient.auth.getUser()
  if (!data.user) throw new Error('Not found user')
  const { data: logs } = await serverComponentClient.from('logs').select('*').eq('user_id', data.user.id)

  return (
    <>
      {logs && logs.length ? (
        <ul>
          {logs.map(({ id, title, content }) => (
            <li key={id}>
              <Link href={`/logs/${id}`}>
                <p>{title}</p>
                <p>{content}</p>
              </Link>
              <RemoveLog id={String(id)} />
            </li>
          ))}
        </ul>
      ) : (
        <p>nothing yet</p>
      )}
      <ButtonWrapper>
        <SignOutButton />
      </ButtonWrapper>
      <ButtonWrapper>
        <Link href="/logs/new">+ add new log</Link>
      </ButtonWrapper>
    </>
  )
}
