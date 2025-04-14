'use client'
//Component GlobalHeader

import React, { useState } from 'react'
import Logo from '@components/ui/logo'
import MainMenu from '@components/layout/main-menu'
import Togglemenu from '@components/ui/toggle-menu'
import { usePathname } from 'next/navigation'

export default function GlobalHeader() {
    //Check if "/", then we style header diffrently

    const pathname = usePathname()
    const isHome = pathname === '/'

    //To hold states for our Toggle
    const [menuVisible, setMenuVisible] = useState(false)
    return (
        <header
            className={`${isHome ? `home global-header` : 'global-header'}`}
            data-toggle={menuVisible}
        >
            <div className="global-header__container">
                <Logo />
                <MainMenu menuVisible={menuVisible} />
                <Togglemenu
                    menuVisible={menuVisible}
                    setMenuVisible={setMenuVisible}
                ></Togglemenu>
            </div>
        </header>
    )
}
