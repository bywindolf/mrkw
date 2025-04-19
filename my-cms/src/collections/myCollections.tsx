import { buildCollection } from '@firecms/core'
// import { StorageImage } from '../components/StorageImage'
export const testCollection = buildCollection({
    name: 'Test Collection',
    singularName: 'work2',
    id: 'work2',
    path: 'work2',
    group: 'Test Group',
    icon: 'check_circle',
    description:
        'A test collection to try out image selection from Firebase Storage.',
    properties: {
        title: {
            dataType: 'string',
            name: 'Title',
            validation: {
                required: true,
            },
        },
        image: {
            dataType: 'string',
            name: 'Image',
            description: 'Pick an image from Firebase Storage',
            // Use StorageImage component to render the image
            //   Field: StorageImage, // Custom field component
            validation: {
                required: true,
            },
        },
        images: {
            dataType: 'array',
            name: 'Images',
            hideFromCollection: true,
            of: {
                dataType: 'map',
                properties: {
                    fullPath: {
                        dataType: 'string',
                        name: 'Storage Path',
                        storage: {
                            storagePath: ({ entityId }) => `images/${entityId}`,
                            acceptedFiles: ['image/*'],
                            metadata: {
                                cacheControl: 'max-age=1000000',
                            },
                        },
                    },
                    downloadURL: {
                        dataType: 'string',
                        name: 'Public URL',
                        readOnly: true,
                    },
                },
            },
            description: 'Upload multiple images with full path + URL',
        },
        description: {
            dataType: 'string',
            name: 'Description',
        },
    },
})
