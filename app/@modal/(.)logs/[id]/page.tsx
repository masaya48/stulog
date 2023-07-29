import { Log } from '@/app/logs/[id]/Log'
import Modal from '@/app/_components/Modal'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function LogModal({params}: {params: {id: string}}) {
  const supabase = createServerComponentClient<Database>({cookies})
  const {data} = await supabase.from('logs').select().eq('id', params.id)
  console.log('mog modal');
  
  return (
    <Modal>
      <Log log={data?.[0] ?? null} />
    </Modal>
  )
}
