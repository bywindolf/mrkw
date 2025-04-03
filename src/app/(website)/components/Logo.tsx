//Component: Logo
//BEM
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link className="logo" href={`/`}>
      <span className="logo__image">Logo</span>
      <span className="logo__text">Text</span>
    </Link>
  );
}
