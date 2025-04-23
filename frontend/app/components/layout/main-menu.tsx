import MenuItem from '../layout/menu-item'
import { useEffect, useRef } from 'react'

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

export default function MainMenu({
    menuVisible,
    setMenuVisible,
}: {
    menuVisible: boolean
    setMenuVisible: (visible: boolean) => void
}) {
    // Reference to keep track on click outside
    const listRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                listRef.current &&
                !listRef.current.contains(event.target as Node)
            ) {
                setMenuVisible(false)
            }
        }

        const timer = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside)
        }, 0)

        return () => {
            clearTimeout(timer)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [setMenuVisible])

    return (
        <nav className={'main-menu'} data-toggle={menuVisible}>
            <ul className="main-menu__list" ref={listRef}>
                {menuData.map((item, index) => (
                    <MenuItem
                        key={index}
                        url={item.url}
                        className="main-menu__item"
                        onClick={() => setMenuVisible(false)}
                    >
                        {item.title}
                    </MenuItem>
                ))}
            </ul>
        </nav>
    )
}
