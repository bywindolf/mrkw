import React from "react";
import Main from "@/app/(website)/components/Main";

export default function SingleWork() {
  return (
    <>
      <section className="workinfo">
        <div className="workinfo__container">
          <div className="workinfo__info">
            <div className="workinfo__header">
              <h1 className="header__client">Client</h1>
              <h2 className="header__title">Single Work Title</h2>
            </div>
            <div className="workinfo__details">
              <ul className="workinfo__categories">
                <li>Category A</li>
                <li>Category B</li>
              </ul>
              <p className="workinfo__timespan">20XX</p>
            </div>
          </div>
        </div>
      </section>
      <Main>test</Main>
    </>
  );
}
