import { Database } from '@/libs/database.types'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { RedirectType } from 'next/dist/client/components/redirect'
import { cookies } from 'next/headers'
import { redirect,  } from 'next/navigation'

export const createLog = async (formData: FormData) => {
  'use server'
  const title = String(formData.get('title'))
  const content = String(formData.get('content'))
  const id = String(formData.get('id'))
  
  const supabase = createServerActionClient<Database>({cookies})
  const {data} = await supabase.auth.getUser()
  if (!data.user) {
    throw new Error('Unauthorized: no user error.')
  }

  await supabase.from('logs').upsert({title, content, user_id: data.user.id, id: id || undefined})
  revalidatePath('/logs')
  redirect('/logs')
}
