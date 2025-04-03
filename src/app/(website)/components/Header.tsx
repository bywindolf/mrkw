//Component Header

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderLink } from "@/app/(website)/components/HeaderLink";
import MainMenu from "./MainMenu";
import Logo from "./Logo";

export function Header() {
  return (
    <header className={"header"}>
      <div className="container header__container">
        <Logo />
        <MainMenu />
      </div>
    </header>
  );
}
