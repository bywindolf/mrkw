import React from "react";

type CardProps = {
  className?: string;
  item: {
    title: string;
    description: string;
  };
};

export default function Card({ item, className }: CardProps) {
  return <li className={`card ${className}`}>{item.title}</li>;
}
