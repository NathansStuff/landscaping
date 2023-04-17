import { ICategory } from './ICategory';
import { ITestimony } from './ITestimony';

export interface IJob {
  title: string;
  slug: string;
  heroImage: string;
  testimony: ITestimony;
  categories: string[];
  images: string[];
}
