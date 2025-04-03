//Component: Work
//Want to make this component to be "smart" and make use of prop defining what kind of "list" we should serve

import React from "react";
import Card from "./WorkCard";
import Link from "next/link";

// Moved WorkProps
import { WorkProps, WorkItem, ExperienceItem } from "@/app/common/types";
import WorkCard from "./WorkCard";

const cardData: WorkItem[] = [
  {
    id: 1,
    slug: "first-item",
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
    slug: "third-item",
    title: "Third Item",
    description: "This is the third item description",
  },
];

const experienceData: ExperienceItem[] = [
  { id: 1, company: "Company A", role: "Developer", years: 5 },
  { id: 2, company: "Company B", role: "Designer", years: 3 },
];

export default function Work({ type = "work" }: WorkProps) {
  const items = type === "work" ? cardData : experienceData;

  return (
    <section className={`${type}`}>
      <div className={`${type}__container`}>
        <ul className={`${type}__list`}>
          {items.map((item) => (
            <li key={item.id} className={`${type}__list-item`}>
              {type === "work" ? (
                <Link href={`${type}/${(item as WorkItem).slug}`}>
                  <WorkCard item={item} /> {/* Pass item directly */}
                </Link>
              ) : (
                <Card item={item} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
