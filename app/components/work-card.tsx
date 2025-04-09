//Component: WorkCard
import React from 'react'
import { CardProps } from '@/common/types'
import Link from 'next/link'
import Image from 'next/image'
export default function WorkCard({ item }: CardProps) {
    // Check cover, if missing return null
    const cover = item.cover?.[0]?.downloadURL || null
    const imageSrc = cover || 'logo.svg' // Fallback to default if no cover

    return (
        <Link href={`/work/${item.slug}`}>
            <Image src={imageSrc} width={300} height={400} alt="sf"></Image>
            {'title' in item && <h4 className="work__title">{item.title}</h4>}

            {'client' in item && <p className="work__client">{item.client}</p>}

            {/* {'description' in item && <p>{item.description}</p>} */}
        </Link>
    )
}
