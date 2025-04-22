// For portfolio related tasks (Kristoffer)
export type WorkProps = {
    colSpan?: string
    isFeatured?: boolean
}

export type ContentBlock =
    | { type: 'pageHeader'; value: string }
    | { type: 'text'; value: string }
    | { type: 'image'; value: string }
    | { type: 'hero'; value: { content: string; title: string } }

export type WorkItem = {
    id?: number | string
    client?: string
    title?: string
    slug?: string
    categories?: string[]
    description?: string
    content?: ContentBlock[]
    start?: string
    end?: string
    skills?: string[]
    isFeatured?: boolean
    year?: string
    images?: string[]
    cover?: string
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
}

export type CardProps = {
    className?: string
    item: ExperienceItem | WorkItem
}
