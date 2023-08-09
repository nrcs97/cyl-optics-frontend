'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation';
import Header from '../components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}){
  const path = usePathname().split('/')
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col gap-y-[1rem] w-[100vw] h-[100vh]'>
          { !path.includes('admin') ?
          <Header/> : null}
          {children}
        </div>
      </body>
    </html>
  )
}
