//Component: Logo
//BEM
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <>
      <Link className="logo" href={`/`}>
        <Image
          width={200}
          height={200}
          src="logo.svg"
          alt="MRKW Logo"
          className="logo__image"
        ></Image>
        <span className="logo__text">MRKW</span>
      </Link>
    </>
  );
}
