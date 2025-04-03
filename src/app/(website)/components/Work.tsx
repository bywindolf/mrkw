//Component: Work

import React from "react";
import Card from "./Card";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    slug: "firt-item";
    title: "First Item",
    description: "This is the first item description",
  },
  {
    id: 2,
    slug: "second-item";

    title: "Second Item",
    description: "This is the second item description",
  },
  {
    id: 3,
    title: "Third Item",
    description: "This is the third item description",
  },
  {
    id: 4,
    title: "First Item",
    description: "This is the first item description",
  },
  {
    id: 5,
    title: "Second Item",
    description: "This is the second item description",
  },
  {
    id: 6,
    title: "Third Item",
    description: "This is the third item description",
  },
];

export default function Work() {
  return (
    <section className="work">
      <div className="work__container">
        <ul className="work__list">
          {cardData.map((item) => (
            <li key={item.id} className="work__list-item">
              <Link url={}>
                <Card item={item} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
