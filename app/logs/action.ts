'use server'

import { Database } from '@/libs/database.types'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export const signOut = async () => {
  const supabase = createServerActionClient({cookies})
  await supabase.auth.signOut()
  revalidatePath('/signin')
}

export const deleteLog = async (id: string) => {
  const supabase = createServerActionClient<Database>({cookies})
  await supabase.from('logs').delete().eq('id', id)
  revalidatePath('/logs')
}
