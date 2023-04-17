import { getSanityRequest } from '@/lib/sanity';
import { getImageFor } from '@/lib/sanity/getImageUrl/getImageUrl';
import { ITeamMember } from '@/types/ITeamMember';

import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface IGetTeamMember {
  heroImage: SanityImageSource;
  name: string;
}

const TEAM_MEMBERS_QUERY = `*[_type == "teamMember"]{
    name,
    heroImage
}`;

export async function getTeamMembers(): Promise<ITeamMember[]> {
  const response = await getSanityRequest<IGetTeamMember[]>(TEAM_MEMBERS_QUERY);
  const teamMembers: ITeamMember[] = [];
  response.data.forEach((category) => {
    teamMembers.push({
      heroImage: getImageFor(category.heroImage),
      name: category.name,
    });
  });

  return teamMembers;
}
