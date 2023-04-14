import { getCategory } from '@/apiCalls/getCategory';
import AnimatedText from '@/components/AnimatedText';
import Content from '@/components/Content';
import FeaturedContent from '@/components/FeaturedContent';
import { Metadata } from 'next';

interface ICategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: ICategoryPageProps): Promise<Metadata> {
  const category = await getCategory({ slug });
  return { title: category.title };
}

async function CategoryPage({ params: { slug } }: ICategoryPageProps) {
  const category = await getCategory({ slug });

  const featured = category.content.filter((content) => content.featured);
  const nonFeatured = category.content.filter((content) => !content.featured);

  const contentArray = [];
  while (featured.length || nonFeatured.length) {
    if (featured.length) {
      contentArray.push([featured.shift()]);
    }
    if (nonFeatured.length) {
      if (nonFeatured.length === 1) {
        contentArray.push([nonFeatured.shift(), null]);
      } else {
        contentArray.push([nonFeatured.shift(), nonFeatured.shift()]);
      }
    }
  }

  return (
    <div className='w-full mb-16 flex-center flex-col'>
      <AnimatedText text={category.title} className='my-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
      <div className='flex flex-wrap justify-center sm:justify-start gap-16'>
        {contentArray.map((pair, index) => (
          <div className='flex w-full space-x-16 md:flex-col md:space-x-0 md:space-y-10' key={index}>
            {pair.map((content) => {
              if (!content) return <div className='w-full h-1' />;
              if (content.featured) {
                return <FeaturedContent content={content} key={content.slug} />;
              }
              return <Content content={content} key={content.slug} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
