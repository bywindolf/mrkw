import React from 'react'
import PageHeader from '@/app/components/page-header'
import { db } from '@/lib/firebaseAdmin'
import { WorkItem } from '@/common/types'
import Card from '@/app/components/card'
import Main from '@/app/components/main'

export default async function page() {
    //Fetch our Work collection from Firebase (DB)
    const workSnapshot = await db.collection('work').get()
    const workData = workSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<WorkItem, 'id'>), // assuming id comes from doc.id
    }))

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
