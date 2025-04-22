'use client'
//Component GlobalHeader

import React, { useEffect, useRef, useState } from 'react'
import Logo from '../ui/logo'
import MainMenu from '../layout/main-menu'
import Togglemenu from '../ui/toggle-menu'
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
                <MainMenu
                    menuVisible={menuVisible}
                    setMenuVisible={setMenuVisible}
                />
                <Togglemenu
                    menuVisible={menuVisible}
                    setMenuVisible={setMenuVisible}
                ></Togglemenu>
            </div>
        </header>
    )
}
