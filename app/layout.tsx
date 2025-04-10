import React from 'react'
import type { Metadata } from 'next'
import '../app/global.css'
import { GlobalHeader } from './components/global-header'
import { GlobalFooter } from './components/global-footer'

export const metadata: Metadata = {
    title: 'FireCMS e-commerce and blog demo',
    description: 'This is a demo for using FireCMS as an e-commerce backend',
    generator: 'FireCMS',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <GlobalHeader />
                {children}

                <GlobalFooter />
            </body>
        </html>
    )
}
