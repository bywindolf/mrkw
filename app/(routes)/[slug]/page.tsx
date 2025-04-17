//https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-dynamic'
import React from 'react'
import { db } from '@/lib/firebaseAdmin'
import { notFound } from 'next/navigation'
import PageHeader from '@components/sections/page-header'
import Main from '@components/layout/main'

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

    return (
        <main>
            <Main>
                <PageHeader>{page.title}</PageHeader>

                <div className="content">
                    <div
                        className="rich-content"
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    ></div>
                </div>
            </Main>
        </main>
    )
}
