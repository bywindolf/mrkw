import { db } from '@/lib/firebaseAdmin' // import the initialized Firebase Admin SDK
import React from 'react'
import PageHeader from '@components/sections/page-header'
import Main from '@components/layout/main'
import PageSubHeadline from '@components/sections/page-sub-headline'
import { ExperienceItem } from '@/common/types'
import ExperienceCard from '@components/ui/experience-card'
// import { fetchDevProfile } from "@/common/actions";

export default async function Experience() {
    // Firebase way of fetching data for "collections" of data
    const experienceSnapshot = await db
        .collection('experience')
        .orderBy('end', 'desc')
        .get()
    const experienceData: ExperienceItem[] = experienceSnapshot.docs.map(
        (doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<ExperienceItem, 'id'>), // assuming id comes from doc.id
        })
    )

    const eduationSnapshot = await db.collection('education').get()
    const educationData: ExperienceItem[] = eduationSnapshot.docs.map(
        (doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<ExperienceItem, 'id'>), // assuming id comes from doc.id
        })
    )

    return (
        <>
            <PageHeader>Experience</PageHeader>

            <Main>
                <PageSubHeadline>Professional</PageSubHeadline>
                <ul className="experience__list">
                    {experienceData.map((item) => (
                        <li key={item.id} className="experience__item">
                            <ExperienceCard item={item} />
                        </li>
                    ))}
                </ul>
                <PageSubHeadline>Education</PageSubHeadline>
                <ul className="experience__list">
                    {educationData.map((item) => (
                        <li key={item.id} className="experience__item">
                            <ExperienceCard item={item} />
                        </li>
                    ))}
                </ul>
            </Main>
        </>
    )
}
