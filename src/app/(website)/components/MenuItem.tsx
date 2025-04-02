import Link from "next/link";
import React from "react";

type MenuItemProps = {
  children?: React.ReactNode;
  url: string;
};

export default function MenuItem({ url, children }: MenuItemProps) {
  return (
    <li>
      <Link href={url}>{children}</Link>
    </li>
  );
}
