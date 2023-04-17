import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'aboutMe',
      title: 'About Me',
      type: 'blockContent',
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements - Please have 3',
      type: 'array',
      of: [{type: 'reference', to: {type: 'achievement'}}],
    }),
    defineField({
      name: 'skills',
      title: 'Skills - Please have 15 - The first one is the center',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'education',
      title: 'Edcuation',
      type: 'array',
      of: [{type: 'reference', to: {type: 'education'}}],
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [{type: 'reference', to: {type: 'experience'}}],
    }),
  ],
})
