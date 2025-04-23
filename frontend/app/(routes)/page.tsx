//https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'auto'
import React from 'react'
import Main from '../components/layout/main'
import FeaturedWorks from '../components/sections/featured-works'
import { notFound } from 'next/navigation'
import { db } from '@/lib/firebaseAdmin'
import { getPublicImageUrl } from '@/common/functions'
import Image from 'next/image'
import { Markdown } from '@firecms/ui'
import { ContentBlock } from '@/common/types'
import Hero from '../components/sections/hero'
import ExperienceComponent from '../components/sections/experience'

export default async function Home() {
    const formattedSlug = 'home' // Or '' if you prefer

    const pageSnap = await db
        .collection('pages')
        .where('slug', '==', formattedSlug)
        .limit(1)
        .get()

    if (pageSnap.empty) {
        console.error('No page found for the homepage slug:', formattedSlug)
        notFound()
    }

    // const settingsSnap = await db
    //     .collection('globals')
    //     .doc('global-settings')
    //     .get()

    // if (!settingsSnap.exists) {
    //     console.error('Global settings not found')
    //     notFound()
    // }
    // const globalSettings = settingsSnap.data() as GlobalSettings
    // console.log('Global settings:', globalSettings)

    // type GlobalSettings = {
    //     skills: string[]
    //     siteTitle: string
    //     tagline?: string
    //     contactEmail?: string
    //     // Add more fields as needed
    // }
    const page = pageSnap.docs[0].data()
    return (
        <Main>
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
            {/* {globalSettings.skills.map((skill: string, index: number) => (
                <p>hej</p>
            ))} */}
            {/* <FeaturedWorks /> */}
        </Main>
    )
}
