import React from "react";

type CardProps = {
  className?: string;
  item: {
    title: string;
    description: string;
  };
};

export default function Card({ item, className }: CardProps) {
  return (
    <>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </>
  );
}
