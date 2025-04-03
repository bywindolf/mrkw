import React from "react";
import { CardProps } from "@/app/common/types";

export default function ExperienceCard({ item, className }: CardProps) {
  return (
    <>
      {"company" in item && <h4>{item.company}</h4>}
      {"description" in item && <p>{item.description}</p>}
    </>
  );
}
