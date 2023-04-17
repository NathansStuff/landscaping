import { getSanityRequest } from '@/lib/sanity';
import { ITestimony } from '@/types/ITestimony';

const TESTIMONIES_QUERY = `*[_type == "testimonial"]{
    stars,
    name,
    testimony
}`;

export async function getTestimonials(): Promise<ITestimony[]> {
  const response = await getSanityRequest<ITestimony[]>(TESTIMONIES_QUERY);

  return response.data;
}
