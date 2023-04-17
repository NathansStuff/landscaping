import { ISanityBlockContent, getSanityRequest } from '@/lib/sanity';
import { IAchievement } from '@/types/IAchievement';
import { IEducation } from '@/types/IEducation';
import { IExperience } from '@/types/IExperience';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface IAboutPage {
  heroImage: SanityImageSource;
  aboutMe: ISanityBlockContent;
  achievements: IAchievement[];
  educations: IEducation[];
  experiences: IExperience[];
  header: string;
  skills: string[];
}

const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0]{
    heroImage,
    header,
      aboutMe,
    'achievements': *[
   _type == "achievement"]{text, numberOf},
     'educations': *[
   _type == "education"]{title, dates, provider, description},
     'experiences': *[
   _type == "experience"]{title, employer, employerLink, dates, location, description},
    skills
}`;

export async function getAboutPage(): Promise<IAboutPage> {
  const response = await getSanityRequest<IAboutPage>(ABOUT_PAGE_QUERY);
  return response.data;
}
