import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'stars',
      title: 'Stars - 1-5 Note: Increments of 0.5',
      type: 'number',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'testimony',
      title: 'Testimony',
      type: 'string',
    }),
  ],
})
