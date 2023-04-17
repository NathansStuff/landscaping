import { getSanityRequest } from '@/lib/sanity';
import { getImageFor } from '@/lib/sanity/getImageUrl/getImageUrl';
import { IJob } from '@/types/IJob';
import { ITestimony } from '@/types/ITestimony';

import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface IGetJobsBySlug {
  heroImage: SanityImageSource;
  slug: string;
  title: string;
  categories: string[];
  testimony: ITestimony;
  images: SanityImageSource[];
}

export async function getJobBySlug(jobSlug: string): Promise<IJob> {
  const response = await getSanityRequest<IGetJobsBySlug>(
    `*[_type == "jobs" && slug.current == $jobSlug]{
  title,
  heroImage,
  slug,
  testimony->{
    stars,
    name,
    testimony
  },
  categories[]->{
    title
  },
  images
}[0]
`,
    { jobSlug }
  );

  const job = response.data;

  const images: string[] = [];
  job.images.forEach((image) => {
    images.push(getImageFor(image));
  });
  return {
    title: job.title,
    slug: job.slug,
    heroImage: getImageFor(job.heroImage),
    testimony: job.testimony,
    categories: job.categories,
    images: images,
  };
}
