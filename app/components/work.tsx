//Component: Work..
//Want to make this component to be "smart" and make use of prop defining what kind of "list" we should serve

import React from 'react'

// Moved WorkProps
import { WorkProps, WorkItem, ExperienceItem } from '@/common/types'
import WorkCard from './card'
import ExperienceCard from './experience-card'

export default function Work({ type = 'work' }: WorkProps) {
    return (
        <section className={`${type}`}>
            <div className={`${type}__container`}>
                <ul className={`${type}__list`}>
                    {items.map((item) => (
                        <li key={item.id} className={`${type}__list-item`}>
                            {type === 'work' ? (
                                <WorkCard item={item as WorkItem} />
                            ) : (
                                <ExperienceCard item={item as ExperienceItem} />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
