import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

// Helper function to retrieve GCP credentials from environment variables
const getGCPCredentials = () => {
    if (
        process.env.GCP_PRIVATE_KEY &&
        process.env.GCP_SERVICE_ACCOUNT_EMAIL &&
        process.env.GCP_PROJECT_ID
    ) {
        return {
            clientEmail: process.env.GCP_SERVICE_ACCOUNT_EMAIL,
            privateKey: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, '\n'),
            projectId: process.env.GCP_PROJECT_ID,
        }
    } else {
        throw new Error('Missing GCP environment variables.')
    }
}

// Initialize Firebase
function initializeFirebase() {
    const credentials = getGCPCredentials()

    const app =
        getApps().length === 0
            ? initializeApp({ credential: cert(credentials) })
            : getApp()

    return getFirestore(app)
}

// Initialize Firestore
export const db = initializeFirebase()
