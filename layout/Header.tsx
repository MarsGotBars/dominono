import Image from "next/image"
import dominono from "@/assets/logos/dominono.png"
export default function Header(){
 return(
    <header>
        <figure><Image src={dominono} alt="icon"/></figure>
    </header>
 )
}