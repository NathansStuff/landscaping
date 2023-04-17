import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'achievement',
  title: 'Achievement - Used for eg 50 Projects Completed',
  type: 'document',
  fields: [
    defineField({
      name: 'numberOf',
      title: 'Number - how many',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text - of what',
      type: 'string',
    }),
  ],
})
