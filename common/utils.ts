import { WorkItem, ExperienceItem } from './types'
import { db } from '@/lib/firebaseAdmin'
import { notFound } from 'next/navigation'

export const fetchWork = async () => {
    //Fetch our Work collection from Firebase (DB)
    const workSnapshot = await db.collection('work').get()
    const workData = workSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<WorkItem, 'id'>), // assuming id comes from doc.id
    }))
    return workData
}

export const fetchSingleWork = async (slug: string) => {
    const singleWorkSnapshot = await db
        .collection('work')
        .where('slug', '==', slug)
        .limit(1)
        .get()

    // console.log(page)
    // Check cover, if missing return null

    if (singleWorkSnapshot.empty) {
        console.error('No page found for this slug:', slug)
        notFound() // Show Next.js 404
    }

    const page = singleWorkSnapshot.docs.map((doc) => doc.data())[0]
    return page
}

export const fetchExperience = async () => {
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

    return experienceData
}

export const fetchEducation = async () => {
    const eduationSnapshot = await db.collection('education').get()
    const educationData: ExperienceItem[] = eduationSnapshot.docs.map(
        (doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<ExperienceItem, 'id'>), // assuming id comes from doc.id
        })
    )
    return educationData
}
