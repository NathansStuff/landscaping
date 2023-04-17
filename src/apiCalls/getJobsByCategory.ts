import { getSanityRequest } from '@/lib/sanity';
import { getImageFor } from '@/lib/sanity/getImageUrl/getImageUrl';
import { IJob } from '@/types/IJob';
import { ITestimony } from '@/types/ITestimony';

import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface IGetJobsByCategory {
  heroImage: SanityImageSource;
  slug: string;
  title: string;
  categories: string[];
  testimony: ITestimony;
  images: SanityImageSource[];
}

export async function getJobsByCategory(categoryName: string): Promise<IJob[]> {
  const response = await getSanityRequest<IGetJobsByCategory[]>(
    `*[_type == "jobs" && references(categories[]._ref, *[_type == "category" && title == $categoryName][]._id)]{
  title,
  heroImage,
    "slug": slug.current,
  testimony->{
    stars,
    name,
    testimony
  },
  categories[]->{
    title
  },
  images
}`,
    { categoryName }
  );
  const jobs: IJob[] = [];
  response.data.forEach((job) => {
    const images: string[] = [];
    job.images.forEach((image) => {
      images.push(getImageFor(image));
    });
    jobs.push({
      title: job.title,
      slug: job.slug,
      heroImage: getImageFor(job.heroImage),
      testimony: job.testimony,
      categories: job.categories,
      images: images,
    });
  });

  return jobs;
}
