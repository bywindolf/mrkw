// For portfolio related tasks (Kristoffer)
export type WorkProps = {
  type: "work" | "experience";
};

export type WorkItem = {
  id: number;
  title: string;
  slug: string;
  description: string;
  start?: string;
  end?: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  description?: string;
  role: string;
  start?: string;
  end?: string;
};

export type CardProps = {
  className?: string;
  item: ExperienceItem | WorkItem;
};
