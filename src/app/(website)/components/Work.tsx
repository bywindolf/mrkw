//Component: Work

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
      <div className="work__container">
        <ul className="grid work__list">
          {cardData.map((item) => (
            <li key={item.id} className="work__list-item">
              <Card item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
