import { Database } from "@/libs/database.types"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const createLog = async (formData: FormData) => {
  'use server'
  const title = String(formData.get('title'))
  const content = String(formData.get('content'))
  const supabase = createServerActionClient<Database>({cookies})
  const {data} = await supabase.auth.getUser()
  if (!data.user) {
    throw new Error('Unauthorized: no user error.')
  }

  await supabase.from('logs').insert({title, content, user_id: data.user.id})
  revalidatePath('/logs')
  redirect('/logs')
}
