export const getPublicImageUrl = (path: string) => {
    const BUCKET_NAME = 'personal-2025-e1099.firebasestorage.app'
    return `https://storage.googleapis.com/${BUCKET_NAME}/${path}`
}
