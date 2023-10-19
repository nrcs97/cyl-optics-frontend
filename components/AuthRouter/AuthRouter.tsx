'use client'
import type { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { notFound } from 'next/navigation'

export default function AuthRouter({children, authorization}
        : { children: ReactNode, authorization: boolean }){
    const pathname : string[] = usePathname().split('/')
    
    if(pathname[1] === 'admin' && authorization === false) notFound()
    
    return <>{children}</>
}