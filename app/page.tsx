import React from 'react'
import Link from 'next/link'
import Main from './components/main'
import PageSubHeadline from './components/page-sub-headline'
import Hero from './components/hero'

export default function Home() {
    return (
        <>
            <Main>
                <Hero>
                    <h1>
                        ?Designer embrazing a updated role as frontend
                        developer.
                    </h1>
                    <p>Ok</p>
                    <Link href="/experience" className="button">
                        Hello button
                    </Link>
                </Hero>
                <PageSubHeadline>Featured works</PageSubHeadline>
            </Main>
        </>
    )
}
