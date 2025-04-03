import { WorkItem } from "@/app/common/types";
import React from "react";

type CardProps = {
  className?: string;
  item: WorkItem;
};

export default function WorkCard({ item, className }: CardProps) {
  return (
    <>
      {"title" in item && <h4>{item.title}</h4>}
      {"description" in item && <p>{item.description}</p>}
    </>
  );
}
