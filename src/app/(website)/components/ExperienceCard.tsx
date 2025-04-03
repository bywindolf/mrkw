import { ExperienceItem } from "@/app/common/types";
import React from "react";

type CardProps = {
  className?: string;
  item: ExperienceItem;
};

export default function ExperienceCard({ item, className }: CardProps) {
  return (
    <>
      {"title" in item && <h4>{item.company}</h4>}
      {"description" in item && <p>{item.description}</p>}
    </>
  );
}
