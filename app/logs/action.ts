import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export const signOut = async () => {
  'use server'
  const supabase = createServerActionClient({cookies})
  await supabase.auth.signOut()
}
