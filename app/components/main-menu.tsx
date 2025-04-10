import React from 'react'
import MenuItem from './menu-item'

const menuData = [
    {
        title: 'Work',
        url: '/work',
    },
    {
        title: 'Experience',
        url: '/experience',
    },
    {
        title: 'About',
        url: '/about',
    },
]

export default function MainMenu({ menuVisible }: { menuVisible: boolean }) {
    return (
        <nav className={'main-menu'} data-toggle={menuVisible}>
            <ul className="main-menu__list">
                {menuData.map((item, index) => (
                    <MenuItem
                        key={index}
                        url={item.url}
                        className="main-menu__item"
                    >
                        {item.title}
                    </MenuItem>
                ))}
            </ul>
        </nav>
    )
}
