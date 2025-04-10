//Component: Logo.
//BEM
// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoComponent from './../../public/logo.svg'
export default function Logo() {
    return (
        <Link className="logo" href="/">
            <div className="logo__image">
                <LogoComponent className="logo__svg" alt="sfs" />
            </div>
            <span className="logo__text">MRKW</span>
        </Link>
    )
}
