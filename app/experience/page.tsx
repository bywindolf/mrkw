import { db } from "@/lib/firebaseAdmin"; // import the initialized Firebase Admin SDK

import React from "react";
import PageHeader from "../components/page-header";
import Main from "../components/main";
import PageSubHeadline from "../components/page-sub-headline";
import { ExperienceItem } from "@/common/types";
import ExperienceCard from "../components/experience-card";
// import { fetchDevProfile } from "@/common/actions";

export default async function Experience() {
  // Firebase way of fetching data for "collections" of data
  const experienceSnapshot = await db.collection("experience").get();
  const experienceData: ExperienceItem[] = experienceSnapshot.docs.map(
    (doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<ExperienceItem, "id">), // assuming id comes from doc.id
    })
  );

  const eduationSnapshot = await db.collection("education").get();
  const educationData: ExperienceItem[] = eduationSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<ExperienceItem, "id">), // assuming id comes from doc.id
  }));

  return (
    <>
      <PageHeader>Experience</PageHeader>

      <Main>
        <PageSubHeadline>Professional</PageSubHeadline>
        <ul className="experience__list">
          {experienceData.map((item) => (
            <li key={item.id} className="list__item">
              <ExperienceCard item={item} />
            </li>
          ))}
        </ul>
        <PageSubHeadline>Education</PageSubHeadline>
        <ul className="experience__list">
          {educationData.map((item) => (
            <li key={item.id} className="list__item">
              <ExperienceCard item={item} />
            </li>
          ))}
        </ul>
      </Main>
    </>
  );
}
