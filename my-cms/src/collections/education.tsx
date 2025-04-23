import { buildCollection } from '@firecms/core'
// import { StorageImage } from '../components/StorageImage'
export const education = buildCollection({
    name: 'Education',
    singularName: 'education',
    id: 'education',
    path: 'education',
    group: 'Test Group',
    icon: 'smiley',
    description:
        'A test collection to try out image selection from Firebase Storage.',
    properties: {
        company: {
            dataType: 'string',
            name: 'Company',
        },
        description: {
            dataType: 'string',
            name: 'Description',
            markdown: true,
            validation: {
                // ...
            },
        },
        role: {
            dataType: 'string',
            name: 'Role',
        },
        start: {
            dataType: 'date',
            name: 'Start',
        },
        end: {
            dataType: 'date',
            name: 'End',
        },
        skills: {
            dataType: 'array',
            name: 'Skills',
            of: {
                dataType: 'string',
                previewAsTag: true,
            },
        },
    },
})
