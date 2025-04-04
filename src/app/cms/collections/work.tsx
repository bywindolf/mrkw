import { buildCollection } from "@firecms/core";
import { BlogEntry } from "@/app/common/types";

export const workCollection = buildCollection<BlogEntry>({
  id: "work",
  path: "work",
  name: "work",
  singularName: "work entry",
  icon: "article",
  group: "Content",
  description: "A collection of work entries",
  defaultSize: "l",
  properties: {
    name: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },
    header_image: {
      name: "Header image",
      dataType: "string",
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
        metadata: {
          cacheControl: "max-age=1000000",
        },
      },
    },
    content: {
      name: "Content",
      description: "Content blocks for the work entry",
      validation: { required: true },
      dataType: "array",
      oneOf: {
        typeField: "type",
        valueField: "value",
        properties: {
          text: {
            dataType: "string",
            name: "Text",
            markdown: true,
          },
          quote: {
            dataType: "string",
            name: "Quote",
            multiline: true,
          },
          images: {
            name: "Images",
            dataType: "array",
            of: {
              dataType: "string",
              storage: {
                storagePath: "images",
                acceptedFiles: ["image/*"],
                metadata: {
                  cacheControl: "max-age=1000000",
                },
              },
            },
            description:
              "This fields allows uploading multiple images at once and reordering",
          },
          products: {
            name: "Products",
            dataType: "array",
            of: {
              dataType: "reference",
              path: "products",
              previewProperties: ["name", "main_image"],
            },
          },
        },
        propertiesOrder: ["text", "quote", "images", "products"],
      },
    },
    created_on: {
      name: "Created on",
      dataType: "date",
      autoValue: "on_create",
    },
    status: {
      name: "Status",
      validation: { required: true },
      dataType: "string",
      enumValues: {
        published: {
          id: "published",
          label: "Published",
        },
        draft: "Draft",
      },
      defaultValue: "draft",
    },
    publish_date: {
      name: "Publish date",
      dataType: "date",
      clearable: true,
    },
    reviewed: {
      name: "Reviewed",
      dataType: "boolean",
    },
    tags: {
      name: "Tags",
      description: "Example of generic array",
      dataType: "array",
      of: {
        dataType: "string",
        previewAsTag: true,
      },
    },
  },
  initialFilter: {
    status: ["==", "published"],
  },
});
