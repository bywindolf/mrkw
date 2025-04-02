import Link from "next/link";
import React from "react";

type MenuItemProps = {
  url: string;
};

export default function MenuItem({ url }: MenuItemProps) {
  return (
    <li>
      <Link href={url}>MenuItem</Link>
    </li>
  );
}
