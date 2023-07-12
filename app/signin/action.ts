import { serverActionClient } from '@/libs/supabase'
import { revalidatePath } from 'next/cache'

export async function signin(formData: FormData) {
  'use server'
  const email = String(formData.get('email'))

  await serverActionClient.auth.signInWithOtp({email, options: {emailRedirectTo: `${process.env.NEXT_PUBLIC_DOMAIN}/auth/callback`}})
  revalidatePath('/')
}
