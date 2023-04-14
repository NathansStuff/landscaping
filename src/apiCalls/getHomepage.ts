import { getSanityRequest } from '@/lib/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface IHomepage {
  heroImage: SanityImageSource;
  header: string;
  blurb: string;
}

const HOMEPAGE_QUERY = `*[_type == "homepage"][0]{
    heroImage,
    header,
    blurb
}`;

export async function getHomepage(): Promise<IHomepage> {
  const response = await getSanityRequest<IHomepage>(HOMEPAGE_QUERY);
  return response.data;
}
