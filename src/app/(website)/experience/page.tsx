import React from "react";
import PageHeader from "../components/page-header";
import Main from "../components/main";
import PageSubHeadline from "../components/page-sub-headline";
import Work from "../components/Work";
import { fetchDevProfile } from "@/common/actions";

export default async function Experience() {
  const data = await fetchDevProfile();

  console.log(data);

  return (
    <>
      <PageHeader>Experience</PageHeader>

      <Main>
        {
          //Iterate over my skills
          data.skills.map((skill: string, index: number) => (
            <div key="{index}">{skill}</div>
          ))
        }

        <PageSubHeadline>Professional</PageSubHeadline>
        <Work type="experience" />
        <PageSubHeadline>Education</PageSubHeadline>
        <Work type="experience" />
      </Main>
    </>
  );
}
