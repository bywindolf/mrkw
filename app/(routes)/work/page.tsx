//https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'auto'

import React from 'react'
import PageHeader from '@components/sections/page-header'

import Card from '@components/ui/card'
import Main from '@components/layout/main'
import { fetchWork } from '@/common/database'

export default async function page() {
    const workData = await fetchWork({ isType: 'work' })

    return (
        <>
            <Main>
                <PageHeader>Work</PageHeader>
                <section className="work">
                    <ul className="work__list">
                        {workData.map((item) => (
                            <li key={item.id} className="work__item">
                                <Card item={item}></Card>
                            </li>
                        ))}
                    </ul>
                </section>
            </Main>
        </>
    )
}
