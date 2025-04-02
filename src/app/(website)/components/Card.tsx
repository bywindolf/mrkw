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
      {item.title}
      <p>{item.description}</p>
    </>
  );
}
