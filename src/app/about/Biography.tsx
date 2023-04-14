import { IAboutPage } from '@/apiCalls/getAboutPage';
import AnimatedNumbers from '@/components/AnimatedNumbers';
import { SanityText } from '@/components/SanityText';
import TeamMember from '@/components/TeamMember';
import { getImageFor } from '@/lib/sanity/getImageUrl/getImageUrl';

interface BiographyProps {
  aboutPage: IAboutPage;
}

function Biography({ aboutPage }: BiographyProps) {
  return (
    <div className='flex-center !items-start flex-col space-y-4 px-20 md:space-x-6 w-full max-w-7xl md:flex-row md:space-y-0'>
      <div className='flex-center flex-col w-full sm:flex-row md:flex-col md:max-w-[100px]'>
        {aboutPage.achievements.map((achievement, index) => {
          return (
            <h2 key={index} className='flex-center flex-col text-center'>
              <span className='inline-block text-4xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={parseInt(achievement.numberOf)} />+
              </span>
              <span className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm text-center'>
                {achievement.text}
              </span>
            </h2>
          );
        })}
      </div>
      <div className='w-full'>
        <SanityText content={aboutPage.aboutMe} />
      </div>
      <TeamMember
        src={getImageFor(aboutPage.heroImage)}
        name='Justin Smith, Owner'
        height={300}
        width={300}
        className='md:!max-w-[300px]'
      />
    </div>
  );
}

export default Biography;
