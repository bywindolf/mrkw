//Component: Logo.
//BEM
// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SVGIMAGE from '../../public/logo.svg'
// import Image from 'next/image'
export default function Logo() {
    // So much time spented on this little f*cker;
    // https://stackoverflow.com/questions/74606722/how-to-use-svg-in-nextjs-13-with-app-directory
    return (
        <Link className="logo" href="/">
            <div className="logo__image">
                <SVGIMAGE></SVGIMAGE>
            </div>
            <span className="logo__text">MRKW</span>
        </Link>
    )
}
