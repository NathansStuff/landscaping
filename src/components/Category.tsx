import { ICategory } from '@/types/ICategory';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  category: ICategory;
}

function Category({ category }: ProjectProps) {
  const { title, heroImage, slug, blurb } = category;
  const href = `/category/${slug}`;
  return (
    <article className='w-full flex-center flex-col rounded-2xl border border-solid border-black dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4'>
      <div className='absolute top-0 -right-3 z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light' />
      <div className='absolute top-0 left-0 z-20 w-full h-full rounded-2xl bg-light dark:bg-dark' />
      <div className='relative z-30 w-full h-[30rem] lg:h-80 md:h-96 sm:h-80 xs:h-60'>
        <Image src={heroImage} alt={title} className='w-full h-auto object-contain' fill />
      </div>
      <div className='w-full flex flex-col items-start justify-between pl-6 z-40'>
        <Link
          href={href}
          className='hover:underline underline-offset-2 text-primary dark:text-primaryDark hover:text-primary hover:dark:text-primaryDark'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{blurb}</p>
        <div className='mt-2 flex items-center w-full justify-between'>
          <Link href={href} className='text-lg font-semibold underline md:text-base'>
            See All
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Category;
