//Component: WorkCard
import React from "react";
import { CardProps } from "@/common/types";

export default function WorkCard({ item }: CardProps) {
  return (
    <>
      {"title" in item && <h4>{item.title}</h4>}
      {"description" in item && <p>{item.description}</p>}
    </>
  );
}
