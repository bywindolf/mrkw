import React from "react";
import PageHeader from "../components/page-header";
import Main from "../components/main";
import PageSubHeadline from "../components/page-sub-headline";
import Work from "../components/work";
import { fetchDevProfile } from "@/common/actions";

export default async function Experience() {
  //Get my devProfile
  const data = await fetchDevProfile();

  // console.log(data);

  return (
    <>
      <PageHeader>Experience</PageHeader>
      <section className="dev-profile">
        <div className="dev-profile__container">
          <div className="skills">
            <h3>test</h3>
            <ul className="skills__list">
              {
                //Skills may be used in other parts of app
                //Iterate over my skills
                data.skills.map((skill: string, index: number) => (
                  <li key="{index}">{skill}</li>
                ))
              }
            </ul>
          </div>
          <div className="environments">
            <ul className="environments__list">
              {
                //Iterate over my skills
                data.environments.map((env: string, index: number) => (
                  <li key="{index}">{env}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
      <Main>
        <PageSubHeadline>Professional</PageSubHeadline>
        <Work type="experience" />
        <PageSubHeadline>Education</PageSubHeadline>

        <Work type="experience" />
      </Main>
    </>
  );
}
