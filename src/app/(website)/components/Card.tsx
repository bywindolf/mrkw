import { ExperienceItem, WorkItem } from "@/app/common/types";
import React from "react";

type CardProps = {
  className?: string;
  item: WorkItem | ExperienceItem; // Union type to handle both
};

export default function Card({ item, className }: CardProps) {
  return (
    <>
      {"title" in item && <h4>{item.title}</h4>}
      {"description" in item && <p>{item.description}</p>}
      {"company" in item && <p>Company: {item.company}</p>}
      {"role" in item && <p>Role: {item.role}</p>}
      {"years" in item && <p>Years: {item.years}</p>}
    </>
  );
}
