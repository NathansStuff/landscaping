import { getCategories } from '@/apiCalls/getCategories';
import ServiceImage from '@/components/ServiceImage';

async function Services() {
  const categories = await getCategories();
  return (
    <div className='flex-center flex-wrap sm:space-x-4 space-y-4 p-4'>
      {categories.map((category, index) => (
        <div key={index} className={index === 0 ? 'sm:ml-4 mt-4' : ''}>
          <ServiceImage category={category} />
        </div>
      ))}
    </div>
  );
}

export default Services;
