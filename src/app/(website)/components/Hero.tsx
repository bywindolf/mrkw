//Component: Hero

import React, { PropsWithChildren } from "react";

export default function Hero({ children }: PropsWithChildren) {
  return <div className="hero">{children}</div>;
}
