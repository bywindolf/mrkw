//Component: Logo.
//BEM
// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import SVGIMAGE from './../../public/logo.svg'
export default function Logo() {
    // So much time spented on this little f*cker;
    // https://stackoverflow.com/questions/74606722/how-to-use-svg-in-nextjs-13-with-app-directory
    return (
        <Link className="logo" href="/">
            <div className="logo__image">
                {/* <SVGIMAGE alt="test" /> */}

                {
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 144 144"
                    >
                        <path
                            stroke="currentColor"
                            strokeWidth="8"
                            d="M1.293 142.714 142.714 1.293"
                        />
                    </svg>
                }
            </div>
            <span className="logo__text">MRKW</span>
        </Link>
    )
}
