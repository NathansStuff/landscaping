import AnimatedText from '@/components/AnimatedText';
import Testimony from '@/components/Testimony';
import Image from 'next/image';
interface Props {
  params: {
    slug: string;
  };
}

function page({ params: { slug } }: Props) {
  return (
    <div className='pb-10'>
      <AnimatedText text={slug} className='my-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
      <div className='flex-center flex-wrap sm:space-x-4 space-y-4 p-4'>
        <div className='ml-4 mt-4'>
          <div className='relative w-72 h-72  '>
            <Image src='/image1.jpg' alt='hero' layout='fill' objectFit='cover' className='rounded-lg ' />
          </div>
        </div>
        <div className='relative w-72 h-72  '>
          <Image src='/image2.jpg' alt='hero' layout='fill' objectFit='cover' className='rounded-lg ' />
        </div>
        <div className='relative w-72 h-72  '>
          <Image src='/image3.jpg' alt='hero' layout='fill' objectFit='cover' className='rounded-lg ' />
        </div>
        <div className='relative w-72 h-72  '>
          <Image src='/image4.jpg' alt='hero' layout='fill' objectFit='cover' className='rounded-lg ' />
        </div>
        <div className='relative w-72 h-72  '>
          <Image src='/image1.jpg' alt='hero' layout='fill' objectFit='cover' className='rounded-lg ' />
        </div>
        <div className='relative w-72 h-72  '>
          <Image src='/image2.jpg' alt='hero' layout='fill' objectFit='cover' className='rounded-lg ' />
        </div>
        <div className='relative w-72 h-72  '>
          <Image src='/image3.jpg' alt='hero' layout='fill' objectFit='cover' className='rounded-lg ' />
        </div>
        <div className='relative w-72 h-72  '>
          <Image src='/image4.jpg' alt='hero' layout='fill' objectFit='cover' className='rounded-lg ' />
        </div>
        <div className='relative w-72 h-72  '>
          <Image src='/image1.jpg' alt='hero' layout='fill' objectFit='cover' className='rounded-lg ' />
        </div>
      </div>
      <div className='w-full flex-center'>
        <Testimony />
      </div>
    </div>
  );
}

export default page;
