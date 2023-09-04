import Image from "next/image"
import dominono from "@/assets/logos/dominono.png"
export default function Header() {
    return (
        <header className="flex align-center bg-red-400">
            <nav className="mx-4 flex items items-end">
                <figure className="h-16 rotate-45 pr-1"><Image className="h-full w-full object-contain" src={dominono} alt="icon" /></figure><h1 className="text-2xl text-red">Pizz<span className="text text-blue">azz</span></h1>
            </nav>
        </header>
    )
}