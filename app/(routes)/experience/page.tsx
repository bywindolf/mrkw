import React from 'react'
import PageHeader from '@components/sections/page-header'
import Main from '@components/layout/main'
import PageSubHeadline from '@components/sections/page-sub-headline'
import ExperienceCard from '@components/ui/experience-card'
import { fetchEducation, fetchExperience } from '@/common/utils'
// import { fetchDevProfile } from "@/common/actions";

export default async function Experience() {
    const experienceData = await fetchExperience()
    const educationData = await fetchEducation()

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
