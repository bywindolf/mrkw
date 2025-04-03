//Component: Work
//Want to make this component to be "smart" and make use of prop defining what kind of "list" we should serve

import React from "react";
import Card from "./Card";
import Link from "next/link";

type WorkProps = {
  type?: "work" | "experience";
};

const cardData = [
  {
    id: 1,
    slug: "firt-item",
    title: "First Item",
    description: "This is the first item description",
  },
  {
    id: 2,
    slug: "second-item",
    title: "Second Item",
    description: "This is the second item description",
  },
  {
    id: 3,
    slug: "firt-item",

    title: "Third Item",
    description: "This is the third item description",
  },
  {
    id: 4,
    slug: "firt-item",

    title: "First Item",
    description: "This is the first item description",
  },
  {
    id: 5,
    slug: "firt-item",

    title: "Second Item",
    description: "This is the second item description",
  },
  {
    id: 6,
    slug: "firt-item",

    title: "Third Item",
    description: "This is the third item description",
  },
];

export default function Work({ type = "work" }): WorkProps {
  return (
    <section className={`${type}`}>
      <div className={`${type}__container`}>
        <ul className={`${type}__list`}>
          {cardData.map((item) => (
            <li key={item.id} className={`${type}__list-item`}>
              <Link href={`${type}/${item.slug}`}>
                <Card item={item} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
