import React from 'react'
import Main from '@components/layout/main'
import Image from 'next/image'
import { fetchSingleWork } from '@/common/database'
import FeaturedWorks from '@components/sections/featured-works'
import { getPublicImageUrl } from '@/common/functions'

import { ContentBlock } from '@/common/types'
import { notFound } from 'next/navigation'
import { Markdown } from '@firecms/ui'

export default async function SingleWork({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const page = await fetchSingleWork(slug)

    if (!page) {
        notFound()
    }

    const cover = page?.cover || null
    // Construct the url from bucket source that may change
    const cover_url = cover ? getPublicImageUrl(cover) : null

    return (
        <>
            <Main>
                <section className="workinfo">
                    <div className="workinfo__container">
                        <div className="workinfo__info">
                            <div className="workinfo__header">
                                <h1 className="header__title">{page.title}</h1>
                                <h2 className="header__client">
                                    {page.client}
                                </h2>
                            </div>
                            <div className="workinfo__details">
                                <div className="tags">
                                    {page.categories &&
                                        page.categories.map(
                                            (cat: string, index: number) => (
                                                <span
                                                    key={index}
                                                    className="tags__item"
                                                >
                                                    {cat}
                                                </span>
                                            )
                                        )}
                                </div>
                                {page.year && (
                                    <p className="workinfo__timespan">
                                        {page.year}
                                    </p>
                                )}
                            </div>
                        </div>
                        {page.description && (
                            <Markdown
                                className="workinfo__description"
                                source={page.description}
                            />
                        )}
                    </div>
                </section>

                <section className="content">
                    {cover_url && (
                        <Image
                            width={1800}
                            height={1200}
                            src={cover_url}
                            alt=""
                            sizes="(max-width: 1800px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="cover"
                        ></Image>
                    )}

                    {Array.isArray(page.content) &&
                        page.content.map(
                            (block: ContentBlock, index: number) => {
                                switch (block.type) {
                                    case 'text':
                                        return <Markdown source={block.value} />

                                    case 'image':
                                        return (
                                            <section>
                                                <Image
                                                    src={getPublicImageUrl(
                                                        block.value
                                                    )}
                                                    key={index}
                                                    alt={''}
                                                    width={1800}
                                                    height={200}
                                                ></Image>
                                            </section>
                                        )
                                }
                            }
                        )}

                    {page.images &&
                        page.images.map((image: string, index: number) => (
                            <p key={index}>{getPublicImageUrl(image)}</p>
                        ))}
                </section>
                <FeaturedWorks></FeaturedWorks>
            </Main>
        </>
    )
}
