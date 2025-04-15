import React from 'react'
import Link from 'next/link'
import Main from '@components/layout/main'
import Hero from '@components/sections/hero'
import FeaturedWorks from '@components/sections/featured-works'

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
                <FeaturedWorks />
            </Main>
        </>
    )
}
