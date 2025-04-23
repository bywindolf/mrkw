import { fetchEducation, fetchExperience } from '@/common/database'
import React from 'react'
import PageSubHeadline from './page-sub-headline'
import ExperienceCard from '../ui/experience-card'

export default async function ExperienceComponent() {
    const experienceData = await fetchExperience()
    const educationData = await fetchEducation()
    return (
        <section className="experience">
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
        </section>
    )
}
