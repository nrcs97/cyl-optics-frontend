'use client'
import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { notFound } from "next/navigation"

export default function AuthRouter({children} : { children: ReactNode }){
    const pathname = usePathname().split('/')
    
    if (pathname[1] === 'admin') return <>{children}{notFound()}</>

    return <>{children}</>
}