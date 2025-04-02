//Component: Hero

import React, { PropsWithChildren } from "react";

export default function Hero({ children }: PropsWithChildren) {
  return <section className="hero">{children}</section>;
}
