import React from "react";
import MenuItem from "./MenuItem";

export default function MainMenu() {
  return (
    <div className={"main-menu"}>
      <ul className="main-menu__list">
        <MenuItem className="main-menu__list" url="/">
          Home
        </MenuItem>
        <MenuItem className="main-menu__list" url="/test">
          Test
        </MenuItem>
      </ul>
    </div>
  );
}
