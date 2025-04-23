//https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'auto'

import React from 'react'
import PageHeader from '@/app/components/sections/page-header'
import Card from '@/app/components/ui/card'
import Main from '@/app/components/layout/main'
import { fetchWork } from '@/common/database'
import { db } from '@/lib/firebaseAdmin'
import { notFound } from 'next/navigation'
import { ContentBlock } from '@/common/types'
import Image from 'next/image'
import { Markdown } from '@firecms/ui'
import { getPublicImageUrl } from '@/common/functions'
import FeaturedWorks from '@/app/components/sections/featured-works'
import Hero from '@/app/components/sections/hero'
import Work from '@/app/components/sections/work'
export default async function page() {
    const workData = await fetchWork({ isType: 'work' })

    const formattedSlug = 'work' // Or '' if you prefer

    const pageSnap = await db
        .collection('pages')
        .where('slug', '==', formattedSlug)
        .limit(1)
        .get()

    if (pageSnap.empty) {
        console.error('No page found for the homepage slug:', formattedSlug)
        notFound()
    }

    const page = pageSnap.docs[0].data()

    return (
        <>
            <Main>
                <PageHeader>Work</PageHeader>
                <Work></Work>
                {Array.isArray(page.content) &&
                    page.content.map((block: ContentBlock, index: number) => {
                        switch (block.type) {
                            case 'hero':
                                return (
                                    <Hero key={index}>
                                        {block.value.title && (
                                            <h1
                                                className="hero__title"
                                                dangerouslySetInnerHTML={{
                                                    __html: block.value.title,
                                                }}
                                            ></h1>
                                        )}
                                        {block.value.content && (
                                            <p className="hero__content">
                                                {block.value.content}
                                            </p>
                                        )}
                                    </Hero>
                                )
                            case 'text':
                                return (
                                    <section>
                                        <Markdown
                                            key={index}
                                            className="content__text"
                                            source={block.value}
                                        />
                                    </section>
                                )
                            case 'image':
                                return (
                                    <section className="my-container">
                                        <Image
                                            key={index}
                                            src={getPublicImageUrl(block.value)}
                                            alt={''}
                                            width={1800}
                                            height={200}
                                        ></Image>
                                    </section>
                                )
                            case 'featuredWorks':
                                return <FeaturedWorks></FeaturedWorks>
                        }
                    })}
            </Main>
        </>
    )
}
