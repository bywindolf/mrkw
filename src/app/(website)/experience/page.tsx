import React from "react";
import PageHeader from "../components/page-header";
import Main from "../components/main";
import PageSubHeadline from "../components/page-sub-headline";
import Work from "../components/Work";
export default function Experience() {
  return (
    <>
      <PageHeader>Experience</PageHeader>
      <Main>
        <PageSubHeadline>Professional</PageSubHeadline>
        <Work type="experience" />
        <PageSubHeadline>Education</PageSubHeadline>
        <Work type="experience" />
      </Main>
    </>
  );
}
