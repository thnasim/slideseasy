import { defineField, defineType } from 'sanity'

export const template = defineType({
  name: 'template',
  title: 'Template',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Template Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'toolCategory',
      title: 'Design Tool',
      type: 'string',
      options: {
        list: [
          { title: 'PowerPoint', value: 'powerpoint' },
          { title: 'Google Slides', value: 'google-slides' },
          { title: 'Keynote', value: 'keynote' },
          { title: 'Canva', value: 'canva' },
          { title: 'Figma', value: 'figma' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Preview Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Featured on homepage?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'previewUrl',
      title: 'Preview / Purchase URL',
      type: 'url',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'features',
      title: "What's included (feature list)",
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key features shown on the template detail page.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'toolCategory',
      media: 'image',
    },
  },
})
