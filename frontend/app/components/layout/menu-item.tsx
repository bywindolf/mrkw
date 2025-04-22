import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type MenuItemProps = {
    children?: React.ReactNode
    className: string
    url: string
    onClick: () => void
}

export default function MenuItem({
    url,
    children,
    className,
    onClick,
}: MenuItemProps) {
    const pathname = usePathname()
    const isActive = pathname.startsWith(url)

    const newClass = `${className} ${isActive ? 'active' : ''}`
    return (
        <li className={newClass}>
            <Link href={url} onClick={onClick}>
                {children}
            </Link>
        </li>
    )
}
