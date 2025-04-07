//Component GlobalHeader

import React from "react";
import MainMenu from "./main-menu";
import Logo from "./logo";

export function GlobalHeader() {
  return (
    <header className={"global-header"}>
      <div className="container global-header__container">
        <Logo />
        <MainMenu />
      </div>
    </header>
  );
}
