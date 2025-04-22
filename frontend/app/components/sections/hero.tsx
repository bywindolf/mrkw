//Hero Component
//Description may be added
import React, { ReactNode } from 'react'
interface HeroProps {
    children: ReactNode
}

export default function Hero({ children }: HeroProps) {
    return (
        <section className="hero">
            <div className="hero__container">{children}</div>
        </section>
    )
}
