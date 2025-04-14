import React from 'react'
import Link from 'next/link'
import Main from '@components/layout/main'
import PageSubHeadline from '@components/sections/page-sub-headline'
import Hero from '@components/sections/hero'
import { fetchWork } from '@/common/utils'

export default async function Home() {
    const work = await fetchWork()
    return (
        <>
            <Main>
                <Hero>
                    <h1>
                        ..Designer embrazing a updated role as frontend
                        developer.
                    </h1>
                    <p>Ok</p>
                    <Link href="/experience" className="button">
                        Hello button
                    </Link>
                </Hero>
                <PageSubHeadline>Featured works</PageSubHeadline>
            </Main>

            <ul>
                {work.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}
