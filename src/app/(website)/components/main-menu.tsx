import React from "react";
import MenuItem from "./menu-item";

const menuData = [
  {
    title: "Work",
    url: "/work",
  },
  {
    title: "Experience",
    url: "/experience",
  },
  {
    title: "About",
    url: "/about",
  },
];

export default function MainMenu() {
  return (
    <nav className={"main-menu"}>
      <ul className="main-menu__list">
        {menuData.map((item, index) => (
          <MenuItem key={index} url={item.url} className="main-menu__list-item">
            {item.title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
}
