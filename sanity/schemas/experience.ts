import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience / Work History',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'employer',
      title: 'Employer',
      type: 'string',
    }),
    defineField({
      name: 'employerLink',
      title: 'Employer - Url',
      type: 'string',
    }),
    defineField({
      name: 'dates',
      title: 'Dates eg May 2021 - Present',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
})
