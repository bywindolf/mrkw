import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { initializeApp, getApps } from 'firebase/app'
import { firebaseConfig } from '@/my-cms/src/firebase_config'

const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const storage = getStorage(app)

export const getImageUrls = async (paths: string[]): Promise<string[]> => {
    return await Promise.all(
        paths.map((path) => getDownloadURL(ref(storage, path)))
    )
}
