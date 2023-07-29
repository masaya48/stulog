import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Log } from './Log'

export default async function LogPage({params}: {params: {id: string}}) {
  const supabase = createServerComponentClient<Database>({cookies})
  const {data} = await supabase.from('logs').select().eq('id', params.id)
  return <Log log={data?.[0] ?? null} />
}
