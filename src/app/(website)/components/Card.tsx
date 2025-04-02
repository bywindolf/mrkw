import React from "react";

type CardProps = {
  item: {
    title: string;
    description: string;
  };
};

export default function Card({ item }: CardProps) {
  return <li>{item.title}</li>;
}
