import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {
   if (request.nextUrl.pathname.startsWith('/admin')){
        const tokensCookie = request.cookies.get('tokens')
        if (!tokensCookie) return NextResponse.redirect(new URL('/error', request.url))

        const tokens : {accessToken: string, refreshToken: string} = JSON.parse(tokensCookie.value)
        if (typeof tokens.accessToken !== undefined){
            const response = await fetch('http://localhost:3001/token/validate', 
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({token: tokens.accessToken}),
                })
            const { authorization } = await response.json()
            if (!(authorization)) return NextResponse.redirect(new URL('/error', request.url))

            return NextResponse.next()  
        } else {
            return NextResponse.redirect(new URL('/error', request.url))
        }
    }

    // return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
}