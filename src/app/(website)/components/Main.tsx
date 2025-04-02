import React from "react";

type mainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: mainProps) {
  return <div className="main">{children}</div>;
}
