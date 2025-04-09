//Component: Logo.
//BEM
// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImage from './../../public/logo.svg'

export default function Logo() {
    return (
        <>
            <Link className="logo" href="/">
                <LogoImage className="logo__image"></LogoImage>
                <span className="logo__text">MRKW</span>
            </Link>
        </>
    )
}
