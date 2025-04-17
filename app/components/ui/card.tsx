//Component: WorkCard
import React from 'react'
import { CardProps } from '@/common/types'
import Link from 'next/link'
import Image from 'next/image'

export default function Card({ item }: CardProps) {
    // Check cover, if missing return null
    const cover = item.cover?.[0]?.downloadURL || null
    const imageSrc = cover || 'logo.svg' // Fallback to default if no cover

    const altText =
        'title' in item && 'client' in item
            ? `Cover image for ${item.title} by ${item.client}`
            : 'Cover image'

    return (
        <Link href={`/work/${item.slug}`} className="card">
            <Image
                src={imageSrc}
                width={800}
                height={300}
                alt={altText}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="card__image"
            ></Image>
            <div className="card__content">
                <div className="card__info">
                    {'title' in item && (
                        <h4 className="card__title">{item.title}</h4>
                    )}

                    {'year' in item && (
                        <span className="card__year">{item.year}</span>
                    )}
                </div>
                {'categories' in item && (
                    <div className="card__tags tags">
                        {item.categories &&
                            item.categories.length > 0 &&
                            item.categories.map((cat, index) => (
                                <span key={index} className="tags__item">
                                    {cat}
                                </span>
                            ))}
                    </div>
                )}
            </div>
        </Link>
    )
}
