interface ObjProp {
    subItem?: any
}
export default function SubNav({ subItem }: ObjProp) {
    return (
        <nav className="bg-blue w-full fixed h-12 top-20 z-10">
            <ul className="flex items-center justify-center">
                {subItem && Object.entries(subItem).map((item: any, id: number) => {
                    const itemTitle = item[0].charAt(0).toUpperCase() + item[0].slice(1);
                    console.log(item);

                    return (
                        <a key={id} href={`#${itemTitle}`}>
                            <li className="text-white">
                                {`${itemTitle} ${item[1].length}`}
                            </li>
                        </a>
                    )
                })}
            </ul>
        </nav>
    )
}