import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function signin(formData: FormData) {
  'use server'
  const email = String(formData.get('email'))
  const serverActionClient = createServerActionClient({cookies})
  await serverActionClient.auth.signInWithOtp({email, options: {emailRedirectTo: `${process.env.NEXT_PUBLIC_DOMAIN}/auth/callback`}})
  revalidatePath('/')
}
