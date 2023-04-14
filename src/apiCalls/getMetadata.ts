import { getSanityRequest } from '@/lib/sanity';

export interface IMetadata {
  title: string;
  description: string;
  keywords: string[];
}

const METADATA_QUERY = `*[_type == "metadata"][0]{
    title,
    description,
    keywords,
    favicon
}`;

export async function getMetadata(): Promise<IMetadata> {
  const response = await getSanityRequest<IMetadata>(METADATA_QUERY);
  return response.data;
}
