import React from 'react'
import PageHeader from '../components/page-header'
import Main from '../components/main'
import { db } from '@/lib/firebaseAdmin'
import { WorkItem } from '@/common/types'
import WorkCard from '../components/work-card'

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
                                <WorkCard item={item}></WorkCard>
                            </li>
                        ))}
                    </ul>
                </section>
            </Main>
        </>
    )
}
