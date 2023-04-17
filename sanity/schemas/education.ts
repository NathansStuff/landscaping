import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education / Qualifications',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'dates',
      title: 'Dates eg 2020 - 2022',
      type: 'string',
    }),
    defineField({
      name: 'provider',
      title: 'Provider eg University of London',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})
