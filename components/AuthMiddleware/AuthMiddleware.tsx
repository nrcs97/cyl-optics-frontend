import type { ReactNode } from "react"
import { cookies } from 'next/headers'
import AuthRouter from "../AuthRouter/AuthRouter"

async function getAuthorization(){
    const cookiesList : any = cookies()
    const tokensCookie : string = cookiesList.get('cyl_user')?.value
    if (!tokensCookie) return false
    
    const tokens : {accessToken: string, refreshToken: string} = JSON.parse(tokensCookie)    
    if (typeof tokens.accessToken !== undefined){
        const response = await fetch('http://localhost:3001/token/validate', 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({token: tokens.accessToken}),
            })
        const { authorization } : {authorization: boolean} = await response.json()
        return authorization
    } else {
        return false
    }
  }

export default async function AuthMiddleware({children} : { children: ReactNode }) {
    const authorization : boolean = await getAuthorization()
   
    return <AuthRouter authorization={authorization}>
        {children}
    </AuthRouter>
}