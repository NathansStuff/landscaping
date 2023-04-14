import { getCategories } from '@/apiCalls/getCategories';
import AnimatedText from '@/components/AnimatedText';
import Category from '@/components/Category';
import TransitionEffect from '@/components/TransitionEffect';

export const metadata = {
  title: 'Portfolio',
};

async function PortfolioPage() {
  const categories = await getCategories();
  return (
    <div className='w-full mb-16 flex-center flex-col'>
      <TransitionEffect />
      <AnimatedText text='Imagination Trumps Knowledge!' className='mt-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
      <div className='grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
        <div className='col-span-12' />
        {categories.map((category) => (
          <div className='col-span-6 sm:col-span-12' key={category.slug}>
            <Category category={category} key={category.slug} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
