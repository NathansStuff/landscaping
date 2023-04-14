import { getSanityRequest } from '@/lib/sanity';

export interface IDetails {
  name: string;
  initials: string;
  email: string;
  linkedin: string;
  github: string;
  youtube: string;
  twitter: string;
  instagram: string;
  resume: string;
}

const DETAILS_QUERY = `*[_type == "details"][0]{
  email,
    initials,
    name,
     "resume": resume.asset->url,
    twitter,
    youtube,
    linkedin,
    github,
    instagram
}`;

export async function getDetails(): Promise<IDetails> {
  const response = await getSanityRequest<IDetails>(DETAILS_QUERY);
  return response.data;
}
