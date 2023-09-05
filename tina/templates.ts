import type { TinaField } from "tinacms";
export function authorFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "email",
      label: "email",
    },
    {
      type: "object",
      name: "social",
      label: "social",
      list: true,
      fields: [
        {
          type: "string",
          name: "icon",
          label: "icon",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "image",
      name: "image_webp",
      label: "image_webp",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
  ] as TinaField[];
}
