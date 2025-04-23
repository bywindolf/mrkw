import { buildCollection } from "@firecms/core";
// import { StorageImage } from '../components/StorageImage'
export const globalsCollection = buildCollection({
  name: "Globals",
  singularName: "globals",
  id: "globals",
  path: "globals",
  group: "Test Group",
  icon: "smiley",
  customId: true,
  description:
    "A test collection to try out image selection from Firebase Storage.",
  properties: {
    skills: {
      dataType: "array",
      name: "Skills",
      of: {
        dataType: "string",
        previewAsTag: true,
      },
    },
  },
});
