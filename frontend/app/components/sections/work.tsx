//Component: Work..
//Want to make this component to be "smart" and make use of prop defining what kind of "list" we should serve

import React from 'react'

// Moved WorkProps
import { WorkItem, WorkProps } from '@/common/types'
import Card from '../ui/card'
import { fetchWork } from '@/common/database'
// import ExperienceCard from './experience-card'

export default async function Work({ isFeatured, colSpan = '' }: WorkProps) {
    const items = await fetchWork({
        isFeatured,
        isType: 'work',
    })
    return (
        <ul className={`work__list${colSpan ? ` cols-${colSpan}` : ''}`}>
            {items.map((item) => (
                <li key={item.id} className={`work__item`}>
                    <Card item={item as WorkItem} />
                </li>
            ))}
        </ul>
    )
}
