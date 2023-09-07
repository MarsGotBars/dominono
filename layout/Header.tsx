'use client'
import Image from "next/image"
import dominono from "@/assets/logos/dominono.png"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import Pizza from "app/pizza/page"

const tabs = ['pizza', 'sides', 'drinks', 'desserts']
export default function Header({ subItem }: any) {
    const { vegan, classics } = subItem ?? {}

    const pathname = usePathname();
    const path = pathname.slice(1);
    return (
        <header className="flex align-center justify-between bg-red-400 sticky top-0 w-full z-10">
            <nav className="mx-4 py-1 flex items-end justify-center w-full bg-white">
                <div className="w-1/3">
                    <div className="w-fit"><Link className="flex py-2 items-end cursor-pointer group" href='/'>
                        <figure className="h-16 group-hover:rotate-[225deg] duration-200 rotate-45 pr-1"><Image className="h-full w-full object-contain" src={dominono} alt="icon" /></figure>
                        <h1 className="text-2xl group-hover:text-blue text-red duration-200 my-0">Pizz<span className="text text-blue duration-200 group-hover:text-red">azz</span></h1>
                    </Link></div>
                </div>
                <div className="w-1/3">
                    <ul className="flex align-center justify-between">
                        {tabs.map((tab, i: number) => {
                            return (
                                <Link key={i} href={`/${tab}`}>
                                    <li>
                                        <motion.span
                                            animate={{ color: tab === path ? "#fff" : "#000" }}
                                            transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.1 }}
                                        >{tab}</motion.span>{tab === path && <motion.div className="highlight" layoutId="underline"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.75 }}
                                        ></motion.div>}
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex self-stretch w-1/3"></div>
            </nav>
            <nav className="bg-blue w-full fixed h-12 top-20">
                <ul className="flex items-center justify-center">
                    {Object.keys(subItem).map((item:any, id:number)=>{
                        return(
                            <a key={id} href={`#${item}`}><li>
                                {`${item} ${item.length}`}
                            </li></a>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}