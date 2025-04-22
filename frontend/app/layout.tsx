import React from 'react'
// import type { Metadata } from 'next'
import './global.css'
import GlobalHeader from './components/layout/global-header'
import GlobalFooter from './components/layout/global-footer'
// import { db } from '@/lib/firebaseAdmin'

// Need to fix SEO dynamically. Have to dig deeper in Documentation
// export async function generateMetadata(): Promise<Metadata> {
//     const siteOptionsRef = await db
//         .collection('siteOptions')
//         .doc('global')
//         .get()
//     const siteOptions = siteOptionsRef.data()

//     return {
//         title: siteOptions?.siteTitle || 'Default Title',
//         description: 'Dynamic site title loaded from Firestore',
//     }
// }

export const metadata = {
    title: 'Kristoffer — Portfolio selling frontend',
    description: 'Portfolio selling frontend',
    icons: {
        icon: [
            {
                type: 'image/svg+xml',
                media: '(prefers-color-scheme: light)',
                url: './favicon-light.svg',
            },
            {
                type: 'image/svg+xml',
                media: '(prefers-color-scheme: dark)',
                url: './favicon-light.svg',
            },
        ],
    },
}

export default async function RootLayout({
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
