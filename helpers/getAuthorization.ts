import { getCookie } from "./cookies"

export async function getAuthorization(){
    const tokensCookie : any = getCookie('cyl_user')
    if (tokensCookie === undefined) return false

    const tokens : {accessToken: string, refreshToken: string} = JSON.parse(tokensCookie)
    if (typeof tokens.accessToken === undefined) return false

    const response : any = await fetch('http://localhost:3001/token/validate', 
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            tokens: {accessToken: tokens.accessToken, refreshToken: tokens.refreshToken}
        }),
    })
    const { authorization } = await response.json()
    return authorization
}