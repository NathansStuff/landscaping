import { getJobsByCategory } from '@/apiCalls/getJobsByCategory';
import CategoryImage from '@/components/CategoryImage';

interface ICategoryProps {
  name: string;
}

async function Categories({ name }: ICategoryProps) {
  const jobs = await getJobsByCategory(name);
  return (
    <div className='flex-center flex-wrap sm:space-x-4 space-y-4 p-4'>
      <div className='sm:ml-4 mt-4'>
        <CategoryImage category={jobs[0]} />
      </div>
      {jobs.slice(1).map((job, index) => {
        return <CategoryImage category={job} key={index} />;
      })}
    </div>
  );
}

export default Categories;
