import AnimatedText from '@/components/AnimatedText';
import CategoryImage from '@/components/CategoryImage';
import BeforeAndAfter from './BeforeAndAfter';

interface Props {
  params: {
    slug: string;
  };
}

function page({ params: { slug } }: Props) {
  return (
    <div className='pb-10'>
      <AnimatedText text={slug} className='my-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
      <h3 className='sm:text-3xl font-semibold text-center'>October 2022</h3>
      <div className='flex-center flex-wrap sm:space-x-4 space-y-4 p-4'>
        <BeforeAndAfter />
        <BeforeAndAfter />
        <BeforeAndAfter />
        <BeforeAndAfter />
      </div>
    </div>
  );
}

export default page;
