'use client'
//Component GlobalHeader

import React, { useState } from 'react'
import MainMenu from './main-menu'
import Logo from './logo'
import Togglemenu from './toggle-menu'

export default function GlobalHeader() {
    //To hold states for our Toggle
    const [menuVisible, setMenuVisible] = useState(false)
    return (
        <header className={'global-header'} data-toggle={menuVisible}>
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
