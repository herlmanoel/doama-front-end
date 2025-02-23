import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { Rotas } from './lib/Rotas'

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname === Rotas.ADMIN_ONLY &&
      req.nextauth.token?.role !== 'admin'
    ) {
      return NextResponse.rewrite(new URL(Rotas.UNAUTHORIZED, req.url))
    }
  },
  {
    callbacks: {
      authorized({ token }) {
        console.log(`authorized ${token?.role}`)
        return !!token
      }
    }
  }
)

export const config = { matcher: [ "/admin-only" ] }
