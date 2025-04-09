import React from 'react'
import { CardProps } from '@/common/types'
import { format } from 'date-fns' // Optional: for better date formatting

type FirestoreTimestamp = {
    _seconds: number
    _nanoseconds?: number
}

export default function ExperienceCard({ item }: CardProps) {
    // Extract the start and end fields
    const start = item.start // Firestore Timestamp
    const end = item.end // Firestore Timestamp

    // Initialize Date objects for start and end
    let startDate: Date | null = null
    let endDate: Date | null = null

    // Handle start date parsing
    if (start && typeof start === 'object' && '_seconds' in start) {
        const timestamp = start as FirestoreTimestamp
        startDate = new Date(timestamp._seconds * 1000)
    } else if (typeof start === 'string') {
        startDate = new Date(start)
    }

    // Handle end date parsing
    if (end && typeof end === 'object' && '_seconds' in end) {
        const timestamp = end as FirestoreTimestamp
        endDate = new Date(timestamp._seconds * 1000)
    } else if (typeof end === 'string') {
        endDate = new Date(end)
    }

    // Log the parsed date objects for debugging
    console.log('Parsed start date:', startDate)
    console.log('Parsed end date:', endDate)

    // Format the dates if they are valid
    const formattedStart = startDate
        ? format(startDate, 'MMMM yyyy')
        : 'No start date'
    const formattedEnd = endDate ? format(endDate, 'MMMM yyyy') : 'No end date'

    return (
        <>
            {/* Conditional rendering to display the data */}

            <div className="expericene__headline">
                {'role' in item && (
                    <h4 className="experience__role">{item.role}</h4>
                )}
                {'company' in item && (
                    <h4 className="experience__company">{item.company}</h4>
                )}
            </div>
            {/* If description exists, render it as HTML */}
            {'description' in item && item.description && (
                <div className="experience__content">
                    <div
                        className="experience__description"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <div className="experience__skills">
                        {item.skills?.map((skill: string, index) => (
                            <span className={`tag tag--${skill}`} key={index}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {('start' in item && startDate) || ('end' in item && endDate) ? (
                <div className="experience__dates">
                    {'start' in item && startDate && (
                        <span>{`${formattedStart}`}</span>
                    )}
                    {'end' in item && endDate && (
                        <span>{`${formattedEnd}`}</span>
                    )}
                </div>
            ) : null}
        </>
    )
}
