import React from 'react'
import { db } from '@/lib/firebaseAdmin' // your admin Firestore
import { notFound } from 'next/navigation'
import PageHeader from '@/app/components/page-header'
import Main from '@/app/components/main'

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
            <PageHeader>About</PageHeader>
            <Main>
                <h1 className="text-4xl font-bold">{page.title}</h1>
                {/* Other page content */}
            </Main>
        </main>
    )
}
