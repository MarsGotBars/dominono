'use client'
import Image from "next/image"
import dominono from "@/assets/logos/dominono.png"
import { motion } from "framer-motion"
import { useState } from 'react'

const tabs = ['Pizza', 'Side dishes', 'Drinks', 'Desserts']
export default function Header({ subItem }: any) {
    const [selectedTab, setSelectedTab] = useState<string | null>('Pizza');
    const { vegan, classics } = subItem ?? {}
    console.log(subItem);
    
    return (
        <header className="flex align-center justify-between bg-red-400 sticky top-0 w-full z-10">
            <nav className="mx-4 py-1 flex items-end justify-center w-full bg-white">
                <div className="w-1/3">
                    <div className="flex py-2 items-end cursor-pointer group w-fit">
                        <figure className="h-16 group-hover:rotate-[225deg] duration-200 rotate-45 pr-1"><Image className="h-full w-full object-contain" src={dominono} alt="icon" /></figure>
                        <h1 className="text-2xl group-hover:text-blue text-red duration-200 my-0">Pizz<span className="text text-blue duration-200 group-hover:text-red">azz</span></h1>
                    </div>
                </div>
                <div className="w-1/3">
                    <ul className="flex align-center justify-between relative">
                        {tabs.map((tab, i: number) => {
                            return (
                                <li key={i} onClick={() => setSelectedTab(tab)}>
                                    <motion.span
                                        animate={{ color: tab === selectedTab ? "#fff" : "#000" }}
                                        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.1 }}
                                    >{tab}</motion.span>
                                    {tab === selectedTab && <motion.div className="highlight" layoutId="underline"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.75 }}
                                    ></motion.div>}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex self-stretch w-1/3"></div>
            </nav>
            <nav className="bg-blue w-full fixed h-12 top-20">
                <ul className="flex items-center justify-center">
                    <li><a href="#Vegan">{"Vegan " + vegan.length}</a></li>
                    <li><a href="#Classics">{"Classics " + classics.length}</a></li>
                </ul>
            </nav>
        </header>
    )
}