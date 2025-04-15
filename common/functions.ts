'use client'
import { usePathname } from 'next/navigation'

export const getSlug = () => {
    const pathname = usePathname
    console.log('..>', pathname.name)
}
