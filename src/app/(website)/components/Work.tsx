//Component: Card
// Thinkig of making this Card "smart" for using with Experince maybe

import React from "react";
import Card from "./Card";

const cardData = [
  {
    id: 1,
    title: "First Item",
    description: "This is the first item description",
  },
  {
    id: 2,
    title: "Second Item",
    description: "This is the second item description",
  },
  {
    id: 3,
    title: "Third Item",
    description: "This is the third item description",
  },
];

export default function Work() {
  return (
    <section className="work">
      <div className="work__container container">
        <ul className="work__list">
          {cardData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
