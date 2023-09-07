'use client'
import classNames from "classnames"
import Image from "next/image"
import { useState } from "react"
interface cardProps {
    item: string
    src: string
    info: string
    price: number
}

export default function Card(props: cardProps) {
    const [bool, setBool] = useState<boolean>(false)
    const { item, src, info, price } = props

    return (
        <figure onClick={() => setBool(!bool)} className={classNames(bool === true ? "h-full" : "h-24", " cursor-pointer p-2 my-5 bg-gradient-to-t from-gray-300 from-5% to-white w-1/2 ")}>
            <Image src={src} alt={item} />
            <figcaption className="text-black overflow-hidden -skew-x-12 w-3/4 flex items-center justify-between text-3xl text-end relative mx-auto antialiased">
                <p>{price}</p>
                <h3>{item}</h3>
                <p className=" text-base">{info}</p>
            </figcaption>
        </figure>
    )
}