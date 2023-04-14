import { IContent } from '@/types/IContent';
import Image from 'next/image';
import Link from 'next/link';

interface ContentProps {
  content: IContent;
}

function Content({ content }: ContentProps) {
  const { title, heroImage, blurb, date, href } = content;
  const url = href ?? '';

  const renderImage = () => {
    return (
        <Image src={heroImage} alt={title} className='w-full h-auto object-contain z-80' fill />
    );
  };

  const renderTitle = () => <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>;

  const renderVisitLink = () => (
    <Link href={url} target='_blank' className='text-lg font-semibold underline md:text-base'>
      Visit
    </Link>
  );

  return (
    <article className='w-full flex-center flex-col rounded-2xl border border-solid border-black dark:border-light bg-light dark:bg-dark p-10 relative xs:p-4 max-h-[30rem]'>
      <div className='absolute top-0 -right-3 z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light' />
      <div className='absolute top-0 left-0 z-20 w-full h-full rounded-2xl bg-light dark:bg-dark' />
      <div className='relative z-30 w-full h-[30rem] lg:h-80 md:h-96 sm:h-80 xs:h-60'>
        {url ? (
          <Link href={url} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg h-80'>
            <Image src={heroImage} alt={title} className='w-full h-auto object-contain z-80' fill />
          </Link>
        ) : (
          renderImage()
        )}
      </div>
      <div className='w-full flex flex-col items-start justify-between pl-6 z-40'>
        <div className='w-full flex flex-col items-start justify-between pt-4'>
          <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>
            {blurb}
          </span>
          {url ? (
            <Link href={url} target='_blank' className='hover:underline underline-offset-2'>
              {renderTitle()}
            </Link>
          ) : (
            renderTitle()
          )}
          <p className='my-2 font-medium text-dark dark:text-light'>{date}</p>
          {url && <div className='mt-2 flex items-center w-full justify-between'>{renderVisitLink()}</div>}
        </div>
      </div>
    </article>
  );
}

export default Content;
