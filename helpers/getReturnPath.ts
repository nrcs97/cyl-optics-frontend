export function getReturnPath(pathname : string) : string {
    if (!pathname.includes('/')) throw new Error('Wrong pathname')
    let returnPath = pathname.split('/')
    returnPath.shift()
    returnPath.pop()
    return '/' + returnPath.join('/')
}