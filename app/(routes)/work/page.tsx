import React from 'react'
import PageHeader from '@components/sections/page-header'

import Card from '@components/ui/card'
import Main from '@components/layout/main'
import { fetchWork } from '@/common/utils'

export default async function page() {
    const workData = await fetchWork({})

    return (
        <>
            <PageHeader>Work</PageHeader>

            <Main>
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
