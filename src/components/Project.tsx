import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from './icons/GithubIcon';

interface ProjectProps {
  type: string;
  title: string;
  summary: string;
  img: any;
  link: string;
  github?: string;
}

function Project({ type, title, summary, img, link, github }: ProjectProps) {
  return (
    <article className='w-full flex-center flex-col rounded-2xl border border-solid border-black dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>
      <div className='w-full flex flex-col items-start justify-between pl-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        {github && (
          <div className='mt-2 flex items-center w-full justify-between'>
            <Link href={github} target='_blank' className='text-lg font-semibold underline md:text-base'>
              Visit
            </Link>
            <Link href={github} target='_blank' className='w-8 md:w-6'>
              <GithubIcon />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

export default Project;
