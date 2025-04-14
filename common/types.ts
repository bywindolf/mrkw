// For portfolio related tasks (Kristoffer)
export type WorkProps = {
    type: 'work' | 'experience'
}

export type WorkItem = {
    id: number | string
    client?: string
    title?: string
    slug: string
    categories: string[]
    description?: string
    start?: string
    end?: string
    skills?: string[]
    isFeatured?: boolean
    cover: { downloadURL: string }[]
}

export type ExperienceItem = {
    id: number | string
    company?: string
    slug: string
    description?: string
    categories: string[]
    role?: string
    start?: string
    end?: string
    skills?: string[]
    cover: { downloadURL: string }[]
}

export type CardProps = {
    className?: string
    item: ExperienceItem | WorkItem
}
