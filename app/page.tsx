import React from 'react'
import Link from 'next/link'
import Main from '@components/layout/main'
import PageSubHeadline from '@components/sections/page-sub-headline'
import Hero from '@components/sections/hero'
import Work from '@components/sections/work'

export default async function Home() {
    return (
        <>
            <Hero>
                <h1>
                    ..Designer embrazing a updated role as frontend developer.
                </h1>
                <p>Ok</p>
                <Link href="/experience" className="button">
                    Hello button
                </Link>
            </Hero>
            <Main>
                <PageSubHeadline>Featured works</PageSubHeadline>
            </Main>

            <Work colSpan="4" isFeatured></Work>
        </>
    )
}
