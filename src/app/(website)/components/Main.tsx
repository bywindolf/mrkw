import React, { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren) {
  return <div className="main">{children}</div>;
}
