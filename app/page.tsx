import React from 'react'
import Link from 'next/link'
import Main from '@components/layout/main'
import PageSubHeadline from '@components/sections/page-sub-headline'
import Hero from '@components/sections/hero'
import Work from '@components/sections/work'

export default function Home() {
    return (
        <>
            <Hero>
                <h1>
                    Designer embrazing a updated role as frontend developer.
                </h1>
                <Link href="/experience" className="button">
                    Hello button
                </Link>
                <Link href="/about" className="button">
                    About
                </Link>
            </Hero>
            <Main>
                <PageSubHeadline>Featured works</PageSubHeadline>
            </Main>

            <Work colSpan="4" isFeatured></Work>
        </>
    )
}
