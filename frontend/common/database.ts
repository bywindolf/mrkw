import { WorkItem, ExperienceItem } from "./types";
import { db } from "@/lib/firebaseAdmin";

interface FetchWorkOptions {
  isFeatured?: boolean;
  isType: "work" | "work2";
}

export const fetchWork = async (options: FetchWorkOptions) => {
  try {
    let workSnapshot;

    if (options?.isFeatured !== undefined) {
      workSnapshot = await db
        .collection("work")
        .where("featured", "==", options.isFeatured)
        .get();
    } else {
      workSnapshot = await db.collection(options.isType).get();
    }

    const workData = workSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<WorkItem, "id">),
    }));

    return workData;
  } catch (error) {
    console.error("Error fetching work data:", error);
    throw new Error("Failed to fetch work data");
  }
};

export const fetchSingleWork = async (
  slug: string
): Promise<WorkItem | null> => {
  try {
    const singleWorkSnapshot = await db
      .collection("work")
      .where("slug", "==", slug)
      .limit(1)
      .get();

    // console.log(page)
    // Check cover, if missing return null

    if (!singleWorkSnapshot || singleWorkSnapshot.empty) {
      console.warn("No page found for this slug:", slug);
      return null;
    }

    const page = singleWorkSnapshot.docs.map((doc) => doc.data())[0];

    return page;
  } catch (error) {
    console.error("Error fetching work data:", error);
    throw new Error("Failed to fetch work data");
  }
};

export const fetchExperience = async () => {
  try {
    // Firebase way of fetching data for "collections" of data
    const experienceSnapshot = await db
      .collection("experience")
      .orderBy("end", "desc")
      .get();
    const experienceData: ExperienceItem[] = experienceSnapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<ExperienceItem, "id">), // assuming id comes from doc.id
      })
    );

    return experienceData;
  } catch (error) {
    console.error("Error fetching work data:", error);
    throw new Error("Failed to fetch work data");
  }
};

export const fetchEducation = async () => {
  try {
    const eduationSnapshot = await db.collection("education").get();
    const educationData: ExperienceItem[] = eduationSnapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<ExperienceItem, "id">), // assuming id comes from doc.id
      })
    );
    return educationData;
  } catch (error) {
    console.error("Error fetching work data:", error);
    throw new Error("Failed to fetch work data");
  }
};
