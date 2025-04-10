import React from 'react'
import Main from '@/app/components/main'
import { db } from '@/lib/firebaseAdmin'
import Image from 'next/image'
interface SingleWorkProps {
    params: {
        slug: string
    }
}

export default async function SingleWork({ params }: SingleWorkProps) {
    const { slug } = params

    const snapshot = await db.collection('work').where('slug', '==', slug).get()

    const page = snapshot.docs.map((doc) => doc.data())[0]
    // console.log(page)
    // Check cover, if missing return null
    const cover = page.cover?.[0]?.downloadURL || null
    return (
        <>
            <Main>
                <section className="workinfo">
                    <div className="workinfo__container">
                        <div className="workinfo__info">
                            <div className="workinfo__header">
                                <h1 className="header__client">
                                    {page.client}
                                </h1>
                                <h2 className="header__title">{page.title}</h2>
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
                <div className="my-container">
                    {cover && (
                        <Image
                            width={1400}
                            height={1200}
                            src={cover}
                            alt=""
                        ></Image>
                    )}
                </div>
            </Main>
        </>
    )
}
