export function getCookies(){
    const cookies = document.cookie.split('; ').map(cookie => cookie.split('='))
    return Object.fromEntries(cookies)
}

export function setCookies(key: string, value: string) : void{    
    const cookies : string[][] = document.cookie.split('; ').map(cookie => cookie.split('='))
    let cookiesParsed = Object.fromEntries(cookies)
    if (!cookiesParsed[key]) throw new Error('Unexisting key')

    cookiesParsed[key] = value
    cookiesParsed = Object.entries(cookiesParsed).map(cookie => cookie.join('=')).join('; ')
    console.log(cookiesParsed) //
    
    document.cookie = cookiesParsed
}