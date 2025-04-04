import React from "react";

export default function PageHeader({ children }: React.PropsWithChildren) {
  return (
    <section className="page-header">
      <div className="page-header__container">
        <h1>{children}</h1>
      </div>
    </section>
  );
}
