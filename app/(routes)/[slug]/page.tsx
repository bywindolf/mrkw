//https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-dynamic'
import React from 'react'
import { db } from '@/lib/firebaseAdmin'
import { notFound } from 'next/navigation'
import PageHeader from '@components/sections/page-header'
import Main from '@components/layout/main'
import { ContentBlock } from '@/common/types'
import Image from 'next/image'
import { getPublicImageUrl } from '@/common/functions'
import { Markdown } from '@firecms/ui'

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
            <section className="content">
                {Array.isArray(page.content) &&
                    page.content.map((block: ContentBlock, index: number) => {
                        switch (block.type) {
                            case 'text':
                                return (
                                    <Markdown
                                        key={index}
                                        className="content__text"
                                        source={block.value}
                                    />
                                )
                            case 'image':
                                return (
                                    <Image
                                        src={getPublicImageUrl(block.value)}
                                        key={index}
                                        alt={''}
                                        width={1800}
                                        height={200}
                                    ></Image>
                                )
                        }
                    })}
            </section>
        </Main>
    )
}
