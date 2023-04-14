import { ISanityBlockContent } from '@/lib/sanity';

export interface IExperience {
  dates: string;
  employer: string;
  employerLink: string;
  location: string;
  title: string;
  description: ISanityBlockContent;
}
