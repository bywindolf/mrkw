//Component Header

import React from "react";
import Image from "next/image";
import logo from "@/app/common/logo.svg";
import Link from "next/link";
import { HeaderLink } from "@/app/(website)/components/HeaderLink";
import MainMenu from "./MainMenu";

export function Header() {
  return (
    <header className={"header"}>
      <div className="container header__container">
        <MainMenu />
      </div>
    </header>
  );
}
