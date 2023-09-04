import Image from "next/image"

interface cardProps {
    key: number
    item: string
    src: string
    info: string
    price: number
}

export default function Card(props:cardProps) {
    const {key, item, src, info, price} = props
    return (
        <figure className="h-20 bg-red border-t-2 border-t-blue" key={key}>
            <Image src={src} alt={item}/>
            <figcaption>{item}{info}{price}</figcaption>
        </figure>
    )
}