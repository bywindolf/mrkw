import { WorkItem } from './types'
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
    const snapshot = await db
        .collection('work')
        .where('slug', '==', slug)
        .limit(1)
        .get()

    // console.log(page)
    // Check cover, if missing return null

    if (snapshot.empty) {
        console.error('No page found for this slug:', slug)
        notFound() // Show Next.js 404
    }

    const page = snapshot.docs.map((doc) => doc.data())[0]
    return page
}
