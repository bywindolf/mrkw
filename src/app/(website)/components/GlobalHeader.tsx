//Component GlobalHeader

import React from "react";
import MainMenu from "./MainMenu";
import Logo from "./Logo";

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
