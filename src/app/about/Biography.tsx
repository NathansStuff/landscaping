import { IAboutPage } from '@/apiCalls/getAboutPage';
import AnimatedNumbers from '@/components/AnimatedNumbers';
import { SanityText } from '@/components/SanityText';
import { getImageFor } from '@/lib/sanity/getImageUrl/getImageUrl';
import Image from 'next/image';

interface BiographyProps {
  aboutPage: IAboutPage;
}

function Biography({ aboutPage }: BiographyProps) {
  return (
    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
      <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
        <div className='font-medium '>
          <SanityText content={aboutPage.aboutMe} />
        </div>
      </div>
      <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
        <div className='absolute top-0 -right-3 z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light' />
        <div className='absolute top-0 left-0 z-20 w-full h-full rounded-2xl bg-light dark:bg-dark' />
        <div className='relative z-30 w-full h-[30rem] lg:h-80 md:h-96 sm:h-80 xs:h-60'>
          <Image
            src={getImageFor(aboutPage.heroImage)}
            alt=''
            className='w-full h-auto rounded-2xl object-contain'
            priority
            fill
          />
        </div>
      </div>
      <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
        {aboutPage.achievements.map((achievement, index) => {
          return (
            <div key={index} className='flex flex-col items-end justify-center xl:items-center'>
              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={parseInt(achievement.numberOf)} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm text-center'>
                {achievement.text}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Biography;
