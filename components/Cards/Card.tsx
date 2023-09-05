'use client'
import classNames from "classnames"
import Image from "next/image"
import { useState } from "react"
interface cardProps {
    key: number
    item: string
    src: string
    info: string
    price: number
}

export default function Card(props: cardProps) {
    const [bool, setBool] = useState<boolean>(false)
    const { key, item, src, info, price } = props
    console.log(bool);

    return (
        <figure onClick={() => setBool(!bool)} className={classNames(bool === true ? "h-full" : "h-24", " cursor-pointer p-2 mt-8 bg-gradient-to-t from-gray-300 from-5% to-white w-1/2 my-5 antialiased skew-x-6 rotate-6")} key={key}>
            <Image src={src} alt={item} />
            <figcaption className="text-black overflow-hidden -skew-x-12 w-3/4 flex items-center justify-between text-3xl text-end relative mx-auto">
                <p>{price}</p>
                <p>{item}</p>
                <p>{info}</p>
            </figcaption>
        </figure>
    )
}