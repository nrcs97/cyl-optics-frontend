export function getCookie(name : string) : any{
    if (!document.cookie) return undefined
    
    const cookies : any = document.cookie.split('; ').map(cookie => cookie.split('='))
        .filter(cookie => cookie[0] === name)
    if(!cookies.length) return undefined
    const cookie = cookies[0]
    
    return cookie[1]
}

export function setCookie(key: string, value: string) : void{    
    const cookies : string[][] = document.cookie.split('; ').map(cookie => cookie.split('='))
    let cookiesParsed = Object.fromEntries(cookies)
    if (!cookiesParsed[key]) throw new Error('Cookies: unexisting key')

    cookiesParsed[key] = value
    cookiesParsed = Object.entries(cookiesParsed).map(cookie => cookie.join('=')).join('; ')
    
    document.cookie = cookiesParsed
}