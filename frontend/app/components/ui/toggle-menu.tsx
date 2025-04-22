import React from 'react'

export default function Togglemenu({
    menuVisible,
    setMenuVisible,
}: {
    menuVisible: boolean
    setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const handleClick = () => {
        setMenuVisible((prev) => !prev) // Flip bewteen states;  Flip between false/true, if false flip to true and vice versa.
    }

    return (
        <button
            className="toggle-menu"
            onClick={handleClick}
            data-toggle={menuVisible ? true : false}
        >
            Menu
        </button>
    )
}
