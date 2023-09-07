import classNames from "classnames"
export interface Props{
    children: React.ReactNode,
    id: string,
    className?: string
}
export const CardList = ({children, id, className}: Props) =>{    
    return(
        <div id={id} className={classNames("scroll-mt-36", className)}>
            {children}
        </div>
    )
}

export default CardList