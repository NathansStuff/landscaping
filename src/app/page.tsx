import { getDetails } from '@/apiCalls/getDetails';
import { getHomepage } from '@/apiCalls/getHomepage';
import TransitionEffect from '@/components/TransitionEffect';
import { getImageFor } from '@/lib/sanity/getImageUrl/getImageUrl';
import { CloudArrowDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '../components/AnimatedText';
import HireMe from './HireMe';

export default async function Home() {
  const details = await getDetails();
  const homepage = await getHomepage();
  return (
    <div>
      <TransitionEffect />
      <div className='flex-center justifty-between w-full pt-12 lg:pt-10 relative md:pt-16 sm:pt-8 lg:flex-col'>
        <div className='w-1/2 z-40 h-[34rem] xl:h-96 md:h-72 lg:hidden md:inline-block md:w-full relative'>
          <Image src={getImageFor(homepage.heroImage)} alt={details.name} priority fill className='object-contain' />
        </div>
        <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center lg:py-12'>
          <AnimatedText
            text={homepage.header}
            className='!text-6xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl'
          />
          <p className='my-4 text-bse font-medium md:text-sm sm:text-xs'>{homepage.blurb}</p>
          <div className='flex-center self-start mt-2 space-x-4 lg:self-center'>
            <Link
              href={`${details.resume}?dl=`}
              target={'_blank'}
              className='flex-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light md:p-2 md:px-4 md:text-base'
              download
            >
              Resume
              <CloudArrowDownIcon className='w-6 h-6 ml-2' />
            </Link>
            <Link
              href={`mailto:${details.email}`}
              className='text-lg underline font-medium text-dark dark:text-light md:text-base '
            >
              Contact
            </Link>
          </div>
        </div>
        <HireMe />
      </div>
    </div>
  );
}
