import { IContent } from './IContent';

export interface ICategory {
  heroImage: string;
  slug: string;
  title: string;
  blurb: string;
  content: IContent[];
}
