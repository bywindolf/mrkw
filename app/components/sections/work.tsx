//Component: Work..
//Want to make this component to be "smart" and make use of prop defining what kind of "list" we should serve

import React from 'react'

// Moved WorkProps
import { WorkProps, WorkItem } from '@/common/types'
import Card from '@components/ui/card'
import { fetchWork } from '@/common/utils'
// import ExperienceCard from './experience-card'

export default async function Work({ type = 'work' }: WorkProps) {
    const items = await fetchWork()
    return (
        <section className={`${type}`}>
            <div className={`${type}__container`}>
                <ul className={`${type}__list`}>
                    {items.map((item) => (
                        <li key={item.id} className={`${type}__list-item`}>
                            <Card item={item as WorkItem} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
