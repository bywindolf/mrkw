import Link from 'next/link'
import React from 'react'

export default function GlobalFooter() {
    return (
        <footer className="global-footer">
            <div className="global-footer__container">
                <div className="branding">2025 &copy; Kristoffer Windolf</div>
                <div className="some">
                    <ul className="some__list">
                        <li className="list__item">
                            <Link
                                href="https://github.com/bywindolf"
                                target="_blank"
                            >
                                Github
                            </Link>
                        </li>
                        <Link
                            href="https://linkedin.com/in/kristofferwindolf"
                            target="_blank"
                        >
                            LinkedIn
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
