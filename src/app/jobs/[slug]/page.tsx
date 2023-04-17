import { getJobBySlug } from '@/apiCalls/getJobBySlug';
import AnimatedText from '@/components/AnimatedText';
import Testimony from '@/components/Testimony';
import Image from 'next/image';
interface Props {
  params: {
    slug: string;
  };
}

async function page({ params: { slug } }: Props) {
  const job = await getJobBySlug(slug);
  return (
    <div className='pb-10'>
      <AnimatedText text={job.title} className='my-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
      <div className='flex-center flex-wrap sm:space-x-4 space-y-4 p-4'>
        <div className='grid grid-cols-3 gap-4'>
          {job.images.map((image, index) => {
            return (
              <div key={index} className='relative w-72 h-72'>
                <Image src={image} alt='hero' layout='fill' objectFit='cover' className='rounded-lg' />
              </div>
            );
          })}
        </div>
      </div>
      <div className='w-full flex-center'>
        <Testimony testimony={job.testimony} />
      </div>
    </div>
  );
}

export default page;
