//Component: WorkCard
import React from 'react'
import { CardProps } from '@/common/types'

export default function WorkCard({ item }: CardProps) {
    return (
        <>
            {'title' in item && <h4 className="work__title">{item.title}</h4>}

            {'client' in item && <p className="work__client">{item.client}</p>}

            {/* {'description' in item && <p>{item.description}</p>} */}
        </>
    )
}
