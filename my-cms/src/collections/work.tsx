import { buildCollection, slugify } from '@firecms/core'
// import { StorageImage } from '../components/StorageImage'
export const work = buildCollection({
    name: 'Work',
    singularName: 'work',
    id: 'work',
    path: 'work',
    callbacks: {
        onPreSave: ({ values }) => {
            const updatedSlug = slugify(
                `${values.title} ${values.client}`,
                '-',
                true
            )
            values.slug = updatedSlug
            return values
        },
    },
    group: 'Test Group',
    icon: 'smiley',
    description:
        'A test collection to try out image selection from Firebase Storage.',
    properties: {
        cover: {
            dataType: 'string',
            name: 'Cover',
            storage: {
                storagePath: 'images',
                // storeUrl: true,
                acceptedFiles: ['image/*'],
                // maxSize: 1024 * 1024,
                metadata: {
                    cacheControl: 'max-age=1000000',
                },
                fileName: (context) => {
                    return context.file.name
                },
            },
        },
        client: {
            dataType: 'string',
            name: 'Company',
        },
        featured: {
            dataType: 'boolean',
            name: 'Featured',
        },
        title: {
            dataType: 'string',
            name: 'Title',
        },
        slug: {
            name: 'Slug',
            dataType: 'string',
            readOnly: true,
        },
        categories: {
            dataType: 'array',
            name: 'Category',
            of: {
                dataType: 'string',
                enumValues: {
                    identity: 'Identity',
                    design: 'Design',
                    development: 'Development',
                    marketing: 'Marketing',
                    content: 'Content',
                    branding: 'Branding',
                    print: 'Print',

                    ui: 'UI',
                },

                previewAsTag: true,
            },
            expanded: true,
        },
        description: {
            dataType: 'string',
            name: 'Description',
            markdown: true,
            validation: {
                // ...
            },
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

        year: {
            dataType: 'string',
            name: 'Year',
        },
    },
})
