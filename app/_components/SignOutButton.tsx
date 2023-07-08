'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import {useRouter} from 'next/navigation'

export const SignOutButton = () => {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/signin')
  }
  return (
    <button onClick={signOut}>Logout</button>
  )
}
