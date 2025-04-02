import React from "react";
import Card from "./Card";

const cardData = {};

export default function Work() {
  return (
    <section className="work">
      <div className="work__container container">
        <ul className="work__list">
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </section>
  );
}
