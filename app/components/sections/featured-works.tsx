import React from 'react'
import PageSubHeadline from './page-sub-headline'
import Work from './work'

export default function FeaturedWorks() {
    return (
        <section className="featured-work">
            <PageSubHeadline>Featured works</PageSubHeadline>
            <Work colSpan="4" isFeatured></Work>
        </section>
    )
}
