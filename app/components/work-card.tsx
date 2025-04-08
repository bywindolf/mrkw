//Component: WorkCard
import React from 'react'
import { CardProps } from '@/common/types'
import Link from 'next/link'

export default function WorkCard({ item }: CardProps) {
    return (
        <Link href={`/work/${item.slug}`}>
            {'title' in item && <h4 className="work__title">{item.title}</h4>}

            {'client' in item && <p className="work__client">{item.client}</p>}

            {/* {'description' in item && <p>{item.description}</p>} */}
        </Link>
    )
}
