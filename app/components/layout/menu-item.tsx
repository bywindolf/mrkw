import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type MenuItemProps = {
    children?: React.ReactNode
    className: string
    url: string
}

export default function MenuItem({ url, children, className }: MenuItemProps) {
    const pathname = usePathname()
    const isActive = pathname.startsWith(url)

    const newClass = `${className} ${isActive ? 'active' : ''}`
    return (
        <li className={newClass}>
            <Link href={url}>{children}</Link>
        </li>
    )
}
