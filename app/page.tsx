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
                        Digigner embrazing a updated role as frontend developer.
                    </h1>
                    <p>Littery have beend coding since the age of MS-Dos.</p>
                    <Link href="/experience" className="button">
                        Exper
                    </Link>
                </Hero>
                <PageSubHeadline>Featured works</PageSubHeadline>
                {/* <Work type="work" />
                <Work type="experience" /> */}
            </Main>
        </>
    )
}
