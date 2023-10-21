import type { ReactNode } from "react"
import { cookies } from 'next/headers'
import SessionPopUp from "../SessionPopUp/SessionPopUp"
import AuthRouter from "../AuthRouter/AuthRouter"

async function getAuthorization(tokens: any){
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
    const tokensCookie : string | undefined = cookies().get('cyl_user')?.value
    
    if (tokensCookie !== undefined){
        const tokens : {accessToken: string, refreshToken: string} = JSON.parse(tokensCookie)
        const authorization : boolean = await getAuthorization(tokens)

        if (!authorization) {
            console.log('no autorizado') //
            return <>{children}<SessionPopUp refreshToken={tokens.refreshToken}/></>}
        
        console.log('autorizado') //
        return <>{children}</>
    }
   
    return <AuthRouter>{children}</AuthRouter>
}