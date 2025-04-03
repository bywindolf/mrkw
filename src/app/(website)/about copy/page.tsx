import React from "react";
import PageHeader from "../components/PageHeader";
import Main from "../components/Main";
import PageSubHeadline from "../components/PageSubHeadline";
import Work from "../components/Work";

export default function Experience() {
  return (
    <>
      <PageHeader>Experience</PageHeader>
      <Main>
        <PageSubHeadline>Professional</PageSubHeadline>
        <Work />
        <PageSubHeadline>Education</PageSubHeadline>
        <Work />
      </Main>
    </>
  );
}
