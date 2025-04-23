//https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'auto'
import React from 'react'
import { db } from '@/lib/firebaseAdmin'
import { notFound } from 'next/navigation'
import PageHeader from '@/app/components/sections/page-header'
import Main from '@/app/components/layout/main'
import { ContentBlock } from '@/common/types'
import Image from 'next/image'
import { getPublicImageUrl } from '@/common/functions'
import { Markdown } from '@firecms/ui'
import Hero from '@/app/components/sections/hero'
import FeaturedWorks from '@/app/components/sections/featured-works'
import ExperienceComponent from '@/app/components/sections/experience'

export default async function CMSPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    // Await params.slug for dynamic routing
    const { slug } = await params // Destructure and use it directly

    const formattedSlug = `${slug}` // Make sure you format the slug as needed (e.g., with "/")

    const pageSnap = await db
        .collection('pages')
        .where('slug', '==', formattedSlug)
        .limit(1)
        .get()

    if (pageSnap.empty) {
        console.error('No page found for this slug:', formattedSlug)
        notFound() // Show Next.js 404
    }

    const page = pageSnap.docs[0].data()
    console.log(page.content)
    return (
        <Main>
            <PageHeader>{page.headline}</PageHeader>
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
                            return <FeaturedWorks key={index}></FeaturedWorks>
                        case 'experience':
                            return <ExperienceComponent key={index} />
                    }
                })}
        </Main>
    )
}
