import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const {data} = await supabase.auth.getUser()
  
  if (req.nextUrl.pathname !== '/signin' && !data.user) {
    return NextResponse.redirect(new URL('/signin', req.url))
  }
  
  if (req.nextUrl.pathname === '/signin' && data.user) {
    return NextResponse.redirect(new URL('/logs', req.url))
  }
  return res
}

export const config = {
  matcher: [
    '/logs',
    '/logs/:path*',
    '/signin'
  ]
}
