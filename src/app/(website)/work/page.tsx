import React from "react";
import PageHeader from "../components/PageHeader";
import Main from "../components/Main";
import Work from "../components/Work";

export default function page() {
  return (
    <>
      <PageHeader>Work</PageHeader>
      <Main>
        <Work></Work>
      </Main>
    </>
  );
}
