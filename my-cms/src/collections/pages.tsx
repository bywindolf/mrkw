import { buildCollection, slugify } from '@firecms/core'
// import { StorageImage } from '../components/StorageImage'
export const pagesCollection = buildCollection({
    name: 'Test Collection',
    singularName: 'pages',
    id: 'pages',
    path: 'pages',
    group: 'Test Group',
    icon: 'check_circle',
    callbacks: {
        onPreSave: ({ values }) => {
            const updatedSlug = slugify(`${values.title}`, '-', true)
            values.slug = updatedSlug
            return values
        },
    },
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
        headline: {
            dataType: 'string',
            name: 'Headline',
            validation: {
                required: true,
            },
        },
        slug: {
            name: 'Slug',
            dataType: 'string',
            readOnly: true,
        },
        content: {
            name: 'Content',
            dataType: 'array',
            oneOf: {
                typeField: 'type',
                valueField: 'value',
                properties: {
                    image: {
                        dataType: 'string',
                        name: 'Image',
                        storage: {
                            storagePath: 'images',
                            acceptedFiles: ['image/*'],
                        },
                    },
                    hero: {
                        dataType: 'map',
                        name: 'Hero',
                        properties: {
                            title: {
                                dataType: 'string',
                                name: 'Title',
                            },
                            content: {
                                dataType: 'string',
                                name: 'Content',
                                markdown: true, // Optional, if you want Markdown support
                            },
                        },
                    },
                    text: {
                        dataType: 'string',
                        name: 'Text',
                        markdown: true,
                    },
                    products: {
                        name: 'Products',
                        dataType: 'array',
                        of: {
                            dataType: 'reference',
                            path: 'products',
                            previewProperties: ['name', 'main_image'],
                        },
                    },
                },
            },
        },
    },
})
