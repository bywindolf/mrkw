import React, { PropsWithChildren } from "react";

export default function PageSubHeadline({ children }: PropsWithChildren) {
  return <h2 className={"page-sub-headline"}>{children}</h2>;
}
