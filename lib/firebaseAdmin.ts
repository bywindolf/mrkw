import { SecretManagerServiceClient } from '@google-cloud/secret-manager'
import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

// Initialize the Secret Manager client
const client = new SecretManagerServiceClient()

// Fetch the Firebase credentials from Secret Manager
async function getFirebaseCredentials() {
    const secretName = `projects/${process.env.GCP_PROJECT_ID}/secrets/firebase-service-account/versions/latest`

    // Fetch the secret version
    const [version] = await client.accessSecretVersion({ name: secretName })

    // Ensure version.payload is not null or undefined
    if (!version.payload || !version.payload.data) {
        throw new Error('Failed to retrieve valid secret payload.')
    }

    // Get the payload (secret content)
    const payload = version.payload.data.toString() // No need for 'utf8'

    // Parse the JSON content of the secret

    // console.log(payload)
    return JSON.parse(payload)
}

async function initializeFirebase() {
    // Fetch Firebase credentials from Secret Manager
    const firebaseAdminConfig = await getFirebaseCredentials()

    const app =
        getApps().length === 0
            ? initializeApp({ credential: cert(firebaseAdminConfig) })
            : getApp()

    return getFirestore(app)
}

// Initialize Firestore
export const db = await initializeFirebase()
