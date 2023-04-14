import { IContent } from '@/types/IContent';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedContentProps {
  content: IContent;
}

function FeaturedContent({ content }: FeaturedContentProps) {
  const { title, date, blurb, heroImage, href } = content;
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl relative p-12 rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
      <div className='absolute -top-1 -left-0.5 z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light' />
      <div className='absolute top-0 left-0 z-20 w-full h-full rounded-2xl bg-light dark:bg-dark' />
      <div className='relative z-30 w-full h-[30rem] lg:h-80 md:h-96 sm:h-80 xs:h-60'>
        <Image src={heroImage} alt={title} fill className='object-contain' />
      </div>
      <div className='flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 z-40 w-full'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{date}</span>
        <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm text-dark dark:text-light  underline underline-offset-2'>
          {title}
        </h2>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{blurb}</p>
        {href && (
          <div className='mt-2 flex items-center'>
            <Link
              href={href}
              target='_blank'
              className=' rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark  sm:px-4 sm:text-base "'
            >
              Visit Project
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

export default FeaturedContent;
