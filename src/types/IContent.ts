import { ISanityBlockContent } from '@/lib/sanity';

export interface IContent {
  blurb: string;
  date: string;
  featured: boolean;
  slug: string;
  description: ISanityBlockContent;
  title: string;
  heroImage: string;
  href?: string;
}
