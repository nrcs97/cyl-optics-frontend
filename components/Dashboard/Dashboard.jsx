import NavBar from '@/components/NavBar/NavBar'

export default function Dashboard({children, title, currentTab}){

    return <main className="flex flex-col gap-y-[2rem] max-h-[100vh]">
        <section className="flex h-[100vh]">
            <NavBar currentTab={currentTab}/>
            <div className="flex flex-col gap-y-[2rem] w-full h-full p-[1.4rem] pl-[3rem]">
                <h1 className="font-thin text-gray-800 text-[3rem]">{title}</h1>
                {children}
            </div>
        </section>
</main>
}