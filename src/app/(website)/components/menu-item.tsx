import Link from "next/link";
import React from "react";

type MenuItemProps = {
  children?: React.ReactNode;
  className: string;
  url: string;
};

export default function MenuItem({ url, children, className }: MenuItemProps) {
  return (
    <li className={className}>
      <Link href={url}>{children}</Link>
    </li>
  );
}
