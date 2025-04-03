import React from "react";

export default function PageHeader({ children }: React.PropsWithChildren) {
  return (
    <section className="page-header">
      <h1>{children}</h1>
    </section>
  );
}
