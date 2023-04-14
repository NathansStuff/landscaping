import { ISanityBlockContent, getSanityRequest } from '@/lib/sanity';
import { getImageFor } from '@/lib/sanity/getImageUrl/getImageUrl';
import { ICategory } from '@/types/ICategory';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface IGetCategory {
  title: string;
  blurb: string;
  heroImage: SanityImageSource;
  content: {
    title: string;
    slug: {
      current: string;
    };
    featured: boolean;
    date: string;
    blurb: string;
    heroImage: SanityImageSource;
    description: ISanityBlockContent;
    href: string;
  }[];
}

interface IGetCategoryProps {
  slug: string;
}

export async function getCategory({ slug }: IGetCategoryProps): Promise<ICategory> {
  const response = await getSanityRequest<IGetCategory>(
    `*[_type == "category" && slug.current == $slug] {
  title,
  blurb,
  heroImage,
  "content": content[]->{
    title,
    slug,
    featured,
    date,
    blurb,
    heroImage,
    description,
    href
  }
}[0]`,
    { slug }
  );

  const category: ICategory = {
    title: response.data.title,
    blurb: response.data.blurb,
    heroImage: getImageFor(response.data.heroImage),
    content: [],
    slug: slug,
  };

  response.data.content.forEach((content) => {
    category.content.push({
      title: content.title,
      slug: content.slug.current,
      featured: content.featured,
      date: content.date,
      blurb: content.blurb,
      heroImage: getImageFor(content.heroImage),
      description: content.description,
      href: content.href,
    });
  });

  return category;
}
