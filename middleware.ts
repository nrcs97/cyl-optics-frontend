import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function middleware(req: NextRequest) {   
    console.log(req)
    const pathname = req.nextUrl.pathname
    
    if (!pathname.includes('_next') &&
        !pathname.includes('favicon.ico') &&
        !pathname.includes('error')){
        
        const tokensCookie = req.cookies.get('cyl_user')
        if (!tokensCookie){
            if (pathname.includes('admin')) return NextResponse.redirect(new URL('/error', req.url))
            else return NextResponse.next()
        }

        const tokens : {accessToken: string, refreshToken: string} = JSON.parse(tokensCookie.value)
        if (typeof tokens.accessToken !== undefined){
            const response = await fetch('http://localhost:3001/token/validate', 
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({token: tokens.accessToken}),
                })
            const { authorization } = await response.json()
            
            if (!(authorization)){ 
                if (req.nextUrl.pathname.includes('admin')){
                    return NextResponse.redirect(new URL('/error', req.url))
                } else NextResponse.next()
            }
            
            return NextResponse.next()  
        } else {
            return NextResponse.redirect(new URL('/error', req.url))
        }
    }

    return NextResponse.next()
}