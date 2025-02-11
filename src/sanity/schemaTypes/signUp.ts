import { defineType, defineField } from "sanity";

export const signUp = defineType({
  name: "signUp",
  title: "Newsletter Subscribers",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "message",
      title: "Email Message",
      type: "text",
      description: "Write the email content to send to the subscriber",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Sent", value: "sent" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
