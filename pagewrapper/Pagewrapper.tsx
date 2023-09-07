'use client'
import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
export const PageWrapper = ({
    children,
    className,
}:{children:React.ReactNode, className?:string}) => {
    const pathname = usePathname()
    const path = pathname.slice(1)
return(
    <AnimatePresence mode="popLayout" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.main
        className={classNames("mt-20 container scroll-smooth", className)}
        key={path}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0 }}
        exit={{opacity: 0, y: 20}}
        transition={{duration: 0.3, ease: [0.17, 0.67, 0.83, 0.67]}}
        >
            {children}
        </motion.main>
    </AnimatePresence>
)
}