import React from "react";
import MenuItem from "./MenuItem";

const menuData = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Work",
    url: "/work",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
];

export default function MainMenu() {
  return (
    <nav className={"main-menu"}>
      <ul className="main-menu__list">
        {menuData.map((item) => (
          <MenuItem url={item.url} className="main-menu__list-item">
            {item.title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
}
