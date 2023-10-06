import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import axios from 'axios'
 
export function middleware(request: NextRequest) {
   if (request.nextUrl.pathname.startsWith('/admin')){

    }
   
   
    // return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
}