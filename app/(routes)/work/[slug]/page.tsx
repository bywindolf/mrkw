import React from 'react'
import Main from '@components/layout/main'
import Image from 'next/image'
import { fetchSingleWork } from '@/common/database'
import FeaturedWorks from '@components/sections/featured-works'
import { getPublicImageUrl } from '@/common/functions'

export default async function SingleWork({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const page = await fetchSingleWork(slug)

    const cover = page.cover?.[0]?.downloadURL || null

    return (
        <>
            <Main>
                <section className="workinfo">
                    <div className="workinfo__container">
                        <div className="workinfo__info">
                            <div className="workinfo__header">
                                <h1 className="header__client">{page.title}</h1>
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
                            <div
                                className="workinfo__description"
                                dangerouslySetInnerHTML={{
                                    __html: page.description,
                                }}
                            />
                        )}
                    </div>
                </section>
                <div>test</div>

                {page.images &&
                    page.images.map((image: string, index: number) => (
                        <p key={index}>{getPublicImageUrl(image)}</p>
                    ))}
                <div className="content">
                    {cover && (
                        <Image
                            width={1400}
                            height={1200}
                            src={cover}
                            alt=""
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        ></Image>
                    )}
                </div>
                <FeaturedWorks></FeaturedWorks>
            </Main>
        </>
    )
}
