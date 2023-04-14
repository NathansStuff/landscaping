import AnimatedText from '@/components/AnimatedText';
import Categories from './Categories';
import Testimonials from '@/app/Testimonials';

interface ICategoryPageProps {
  params: {
    slug: string;
  };
}

async function CategoryPage({ params: { slug } }: ICategoryPageProps) {
  return (
    <>
      <div className='w-full mb-16 flex-center flex-col'>
        <AnimatedText text={slug} className='my-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
        <h3 className='lg:text-3xl font-semibold'>Previous Jobs</h3>
        <div className='flex flex-wrap justify-center sm:justify-start gap-16'>
          <Categories />
        </div>
      </div>
      <Testimonials />
    </>
  );
}

export default CategoryPage;
