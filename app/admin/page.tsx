'use client'
import NavBar from '@/components/NavBar/NavBar'

export default function Admin(){

    return <main className="flex flex-col gap-y-[2rem] max-h-[100vh]">
        <section className="flex h-[100vh]">
            <NavBar/>
            <div className="w-full h-full"></div>
        </section>
</main>
}