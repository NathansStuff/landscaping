import { getSanityRequest } from '@/lib/sanity';
import { getImageFor } from '@/lib/sanity/getImageUrl/getImageUrl';
import { ICategory } from '@/types/ICategory';

import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface IGetCategory {
  heroImage: SanityImageSource;
  slug: {
    current: string;
  };
  title: string;
  blurb: string;
}

const CATEGORIES_QUERY = `*[_type == "category"]{
  heroImage,
    slug {
    current
   },
    title,
    blurb
}`;

export async function getCategories(): Promise<ICategory[]> {
  const response = await getSanityRequest<IGetCategory[]>(CATEGORIES_QUERY);
  const categories: ICategory[] = [];
  response.data.forEach((category) => {
    categories.push({
      heroImage: getImageFor(category.heroImage),
      slug: category.slug.current,
      title: category.title,
      blurb: category.blurb,
      content: [],
    });
  });

  return categories;
}
